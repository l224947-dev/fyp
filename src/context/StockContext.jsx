import { createContext, useContext, useState } from "react";
import stocksData from "../data/stocks";
import { useEffect } from "react";

const StockContext = createContext();

export function StockProvider({ children }) {
  const [stocks] = useState(stocksData);
  const [portfolio, setPortfolio] = useState([]);

  // BUY STOCK
  const buyStock = (stock) => {
    setPortfolio((prev) => {
      const existing = prev.find((s) => s.symbol === stock.symbol);

      if (existing) {
        return prev.map((s) =>
          s.symbol === stock.symbol
            ? { ...s, quantity: s.quantity + 1 }
            : s
        );
      }

      return [...prev, { ...stock, quantity: 1 }];
    });
  };

  // SELL STOCK
  const sellStock = (stock) => {
    setPortfolio((prev) =>
      prev
        .map((s) =>
          s.symbol === stock.symbol
            ? { ...s, quantity: s.quantity - 1 }
            : s
        )
        .filter((s) => s.quantity > 0)
    );
  };

  return (
    <StockContext.Provider value={{ stocks, portfolio, buyStock, sellStock }}>
      {children}
    </StockContext.Provider>
  );
}

useEffect(() => {
  const interval = setInterval(() => {
    stocks.forEach((stock) => {
      stock.price += (Math.random() - 0.5) * 2;
    });
  }, 3000);

  return () => clearInterval(interval);
}, []);

export const useStocks = () => useContext(StockContext);