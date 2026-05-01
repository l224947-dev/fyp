import Layout from "../../components/Layout";
import { useTrade } from "../../context/TradeContext";

export default function Home() {
  const { holdings, transactions } = useTrade();

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6">
        Dashboard Overview 📊
      </h1>

      <div className="grid md:grid-cols-3">
        <div className="glass">
          <h2>Active Stocks</h2>
          <p className="text-3xl font-bold">
            {Object.keys(holdings).length}
          </p>
        </div>

        <div className="glass">
          <h2>Total Trades</h2>
          <p className="text-3xl font-bold">
            {transactions.length}
          </p>
        </div>

        <div className="glass">
          <h2>Status</h2>
          <p className="text-3xl font-bold text-green-500">
            Active
          </p>
        </div>
      </div>
    </Layout>
  );
}