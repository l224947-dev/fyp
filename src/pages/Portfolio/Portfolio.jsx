import { useStocks } from "../../context/StockContext";

export default function Portfolio() {
  const { portfolio, sellStock } = useStocks();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Portfolio</h2>

      {portfolio.length === 0 && <p>No stocks yet</p>}

      {portfolio.map((stock) => (
        <div
          key={stock.symbol}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <h3>{stock.name}</h3>
          <p>Quantity: {stock.quantity}</p>

          <button onClick={() => sellStock(stock)}>
            Sell
          </button>
        </div>
      ))}
    </div>
  );
}