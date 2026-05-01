import { useEffect, useState } from "react";
import Layout from "../../components/Layout.jsx";
import { useTrade } from "../../context/TradeContext.jsx";

export default function Trading() {
  const { buyStock, sellStock, holdings } = useTrade();

  // Market stocks (live simulation)
  const [marketStocks, setMarketStocks] = useState([
    { symbol: "AAPL", price: 192.35 },
    { symbol: "TSLA", price: 248.71 },
    { symbol: "GOOGL", price: 176.82 },
    { symbol: "MSFT", price: 421.65 },
    { symbol: "AMZN", price: 184.23 },
  ]);

  const [selectedStock, setSelectedStock] = useState(
    marketStocks[0]
  );

  const [quantity, setQuantity] = useState(1);

  // LIVE PRICE SIMULATION
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketStocks((prev) =>
        prev.map((s) => ({
          ...s,
          price: +(
            s.price +
            (Math.random() - 0.5) * 2
          ).toFixed(2),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // keep selected stock updated with live price
  useEffect(() => {
    const updated = marketStocks.find(
      (s) => s.symbol === selectedStock.symbol
    );
    if (updated) setSelectedStock(updated);
  }, [marketStocks]);

  const total = (
    selectedStock.price * quantity
  ).toFixed(2);

  const owned = holdings[selectedStock.symbol]?.quantity || 0;

  const handleBuy = () => {
    buyStock(selectedStock, quantity);
    alert("Stock Bought 🚀");
  };

  const handleSell = () => {
    sellStock(selectedStock, quantity);
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Trading Terminal 📊
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* MARKET LIST */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Live Market
          </h2>

          <div className="space-y-3">
            {marketStocks.map((stock) => (
              <button
                key={stock.symbol}
                onClick={() =>
                  setSelectedStock(stock)
                }
                className={`w-full text-left p-4 rounded-lg transition ${
                  selectedStock.symbol === stock.symbol
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <div className="flex justify-between">
                  <span className="font-bold">
                    {stock.symbol}
                  </span>
                  <span>${stock.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* TRADE PANEL */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            {selectedStock.symbol}
          </h2>

          <p className="mb-3">
            Owned:{" "}
            <b>{owned}</b> shares
          </p>

          {/* quantity input */}
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) =>
              setQuantity(Number(e.target.value))
            }
            className="w-full p-3 border rounded-lg mb-4"
          />

          {/* total */}
          <p className="mb-4">
            Total:{" "}
            <b>${total}</b>
          </p>

          {/* buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleBuy}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-bold"
            >
              BUY
            </button>

            <button
              onClick={handleSell}
              className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 font-bold"
            >
              SELL
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}