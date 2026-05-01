import Layout from "../../components/Layout";
import { useTrade } from "../../context/TradeContext";
import ProfitChart from "../../components/ProfitChart";

export default function Home() {
  const { holdings, transactions } = useTrade();

  const totalStocks = Object.keys(holdings).length;

  const totalTrades = transactions.length;

  const totalValue = Object.values(holdings).reduce(
    (acc, s) => acc + s.avgPrice * s.quantity,
    0
  );

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard 📊
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Stocks</h2>
          <p className="text-3xl font-bold">
            {totalStocks}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Trades</h2>
          <p className="text-3xl font-bold">
            {totalTrades}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Portfolio Value</h2>
          <p className="text-3xl font-bold">
            ${totalValue.toFixed(2)}
          </p>
        </div>
      </div>
    </Layout>
  );
}