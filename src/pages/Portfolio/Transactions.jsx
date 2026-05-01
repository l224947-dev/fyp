import Layout from "../../components/Layout.jsx";
import { useTrade } from "../../context/TradeContext.jsx";

export default function Transactions() {
  const { transactions } = useTrade();

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6">
        Trade History 📜
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-6">
        {transactions.length === 0 ? (
          <p>No trades yet.</p>
        ) : (
          transactions.map((t) => (
            <div
              key={t.id}
              className="flex justify-between border-b py-3"
            >
              <span className="font-bold">{t.symbol}</span>
              <span>{t.quantity} shares</span>
              <span>${t.total}</span>
              <span className="text-green-600">
                {t.type}
              </span>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}