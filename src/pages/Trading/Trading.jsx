import { useStocks } from "../../context/StockContext";
import StockCard from "../../components/StockCard";

export default function Trading() {
  const { stocks } = useStocks();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Trading Market</h2>

      {stocks.map((stock) => (
        <StockCard key={stock.id} stock={stock} />
      ))}
    </div>
  );
}