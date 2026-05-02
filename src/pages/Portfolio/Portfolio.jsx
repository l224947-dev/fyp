import Layout from "../../components/Layout.jsx";
import { useTrade } from "../../context/TradeContext.jsx";
import PortfolioChart from "../../components/PortfolioChart.jsx";

export default function Portfolio() {
  const { holdings } = useTrade();

  const stocks = Object.values(holdings);

  const totalValue = stocks.reduce(
    (acc, s) => acc + (s.avgPrice + 5) * s.quantity,
    0
  );

  const invested = stocks.reduce(
    (acc, s) => acc + s.avgPrice * s.quantity,
    0
  );

  const profitLoss = totalValue - invested;

  return (
    <Layout>
      {/* HEADER IMAGE */}
      <img
        src="/images/stocks.jpg"
        className="w-full h-48 object-cover rounded-xl mb-6"
      />

      <h1 className="text-4xl font-bold mb-6">
        Portfolio 💼
      </h1>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="glass">
          <h2>Total Value</h2>
          <p className="text-3xl">${totalValue.toFixed(2)}</p>
        </div>

        <div className="glass">
          <h2>Invested</h2>
          <p className="text-3xl">${invested.toFixed(2)}</p>
        </div>

        <div className="glass">
          <h2>Profit / Loss</h2>
          <p
            className={`text-3xl ${
              profitLoss >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            ${profitLoss.toFixed(2)}
          </p>
        </div>
      </div>

      {/* TABLE */}
      <div className="glass mb-6">
        <h2 className="text-xl font-bold mb-4">
          Holdings 📊
        </h2>

        {stocks.length === 0 ? (
          <p>No stocks yet</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th>Symbol</th>
                <th>Qty</th>
                <th>Avg</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              {stocks.map((s) => (
                <tr key={s.symbol}>
                  <td>{s.symbol}</td>
                  <td>{s.quantity}</td>
                  <td>${s.avgPrice}</td>
                  <td>
                    ${(s.avgPrice + 5) * s.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <PortfolioChart />
    </Layout>
  );
}