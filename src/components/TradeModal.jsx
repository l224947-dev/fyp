import { useState } from "react";
import { useStocks } from "../context/StockContext";

export default function TradeModal({ stock, type, onClose }) {
  const { buyStock, sellStock } = useStocks();
  const [quantity, setQuantity] = useState(1);

  const handleTrade = () => {
    if (quantity < 1) return;

    for (let i = 0; i < quantity; i++) {
      if (type === "BUY") {
        buyStock(stock);
      } else {
        sellStock(stock);
      }
    }

    onClose();
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>{type} {stock.name}</h2>
        <p>Current Price: ${stock.price}</p>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={inputStyle}
        />

        <div style={{ marginTop: "20px" }}>
          <button onClick={handleTrade} style={buttonStyle}>
            Confirm
          </button>

          <button
            onClick={onClose}
            style={{ ...buttonStyle, marginLeft: "10px" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "12px",
  width: "400px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "16px",
};