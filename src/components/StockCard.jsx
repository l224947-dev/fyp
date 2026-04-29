import { useState } from "react";
import TradeModal from "./TradeModal";

export default function StockCard({ stock }) {
  const [modal, setModal] = useState(null);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{stock.name} ({stock.symbol})</h3>
      <p>Price: ${stock.price}</p>

      <button onClick={() => setModal("BUY")}>Buy</button>
      <button onClick={() => setModal("SELL")}>Sell</button>

      {modal && (
        <TradeModal
          stock={stock}
          type={modal}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}