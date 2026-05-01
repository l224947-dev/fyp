import { createContext, useContext, useEffect, useState } from "react";

const TradeContext = createContext();

export function TradeProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [holdings, setHoldings] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  // ========================
  // LOAD FROM LOCALSTORAGE
  // ========================
  useEffect(() => {
    const savedTx = localStorage.getItem("transactions");
    const savedHoldings = localStorage.getItem("holdings");
    const savedTheme = localStorage.getItem("darkMode");

    if (savedTx) setTransactions(JSON.parse(savedTx));
    if (savedHoldings) setHoldings(JSON.parse(savedHoldings));
    if (savedTheme) setDarkMode(JSON.parse(savedTheme));
  }, []);

  // ========================
  // SAVE TO LOCALSTORAGE
  // ========================
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("holdings", JSON.stringify(holdings));
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [transactions, holdings, darkMode]);

  // ========================
  // THEME TOGGLE
  // ========================
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // ========================
  // BUY STOCK
  // ========================
  const buyStock = (stock, quantity) => {
    const total = stock.price * quantity;

    setHoldings((prev) => {
      const existing = prev[stock.symbol] || {
        symbol: stock.symbol,
        quantity: 0,
        avgPrice: 0,
      };

      const newQty = existing.quantity + quantity;

      const newAvg =
        (existing.avgPrice * existing.quantity + total) /
        newQty;

      return {
        ...prev,
        [stock.symbol]: {
          symbol: stock.symbol,
          quantity: newQty,
          avgPrice: newAvg,
        },
      };
    });

    setTransactions((prev) => [
      {
        id: Date.now(),
        type: "BUY",
        symbol: stock.symbol,
        price: stock.price,
        quantity,
        total,
      },
      ...prev,
    ]);
  };

  // ========================
  // SELL STOCK
  // ========================
  const sellStock = (stock, quantity) => {
    const current = holdings[stock.symbol];

    if (!current || current.quantity < quantity) {
      alert("Not enough shares to sell!");
      return;
    }

    const total = stock.price * quantity;

    setHoldings((prev) => {
      const updated = { ...prev };

      updated[stock.symbol].quantity -= quantity;

      if (updated[stock.symbol].quantity === 0) {
        delete updated[stock.symbol];
      }

      return updated;
    });

    setTransactions((prev) => [
      {
        id: Date.now(),
        type: "SELL",
        symbol: stock.symbol,
        price: stock.price,
        quantity,
        total,
      },
      ...prev,
    ]);
  };

  return (
    <TradeContext.Provider
      value={{
        transactions,
        holdings,
        darkMode,
        buyStock,
        sellStock,
        toggleTheme,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
}

export function useTrade() {
  return useContext(TradeContext);
}