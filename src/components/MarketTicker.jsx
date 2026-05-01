import { useEffect, useState } from "react";

export default function MarketTicker() {
  const [prices, setPrices] = useState([
    { symbol: "AAPL", price: 192.35 },
    { symbol: "TSLA", price: 248.71 },
    { symbol: "GOOGL", price: 176.82 },
    { symbol: "MSFT", price: 421.65 },
    { symbol: "AMZN", price: 184.23 },
  ]);

  // simulate live movement
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) =>
        prev.map((s) => ({
          ...s,
          price: +(s.price + (Math.random() - 0.5) * 1.5).toFixed(2),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden py-2">
      <div className="whitespace-nowrap animate-pulse flex gap-10 px-4">
        {prices.concat(prices).map((s, i) => (
          <span key={i} className="font-semibold">
            {s.symbol}: ${s.price}
          </span>
        ))}
      </div>
    </div>
  );
}