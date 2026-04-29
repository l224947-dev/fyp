import { useState } from "react";
import { useStocks } from "../context/StockContext";

export default function TradeModal({ stock, type, onClose }) {
  const { buyStock, sellStock } = useStocks();
  const [qty, setQty] = useState(1);

  const handleTrade = () => {
    for (let i = 0; i < qty; i++) {
      type === "BUY" ? buyStock(stock) : sellStock(stock);
    }
    onClose();
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      
      <div style={{ background: "white", padding: "20px" }}>
        <h3>{type} {stock.name}</h3>

        <input
          type="number"
          value={qty}
          min="1"
          onChange={(e) => setQty(Number(e.target.value))}
        />

        <br /><br />

        <button onClick={handleTrade}>
          Confirm {type}
        </button>

        <button onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}