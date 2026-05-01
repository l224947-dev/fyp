import Layout from "../../components/Layout.jsx";
import { useTrade } from "../../context/TradeContext.jsx";
import PortfolioChart from "../../components/PortfolioChart.jsx";

export default function Portfolio() {
  const { holdings } = useTrade();

  const stocks = Object.values(holdings);

  // total current value (simulated live price +5)
  const totalValue = stocks.reduce((acc, stock) => {
    const marketPrice = stock.avgPrice + 5;
    return acc + marketPrice * stock.quantity;
  }, 0);

  // total invested value
  const totalInvested = stocks.reduce(
    (acc, stock) => acc + stock.avgPrice * stock.quantity,
    0
  );

  const profitLoss = totalValue - totalInvested;

  return (
    <Layout>
      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-8">
        Portfolio Dashboard 💼
      </h1>

      {/* STATS CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="glass">
          <h2 className="text-gray-500">Total Value</h2>
          <p className="text-3xl font-bold">
            ${totalValue.toFixed(2)}
          </p>
        </div>

        <div className="glass">
          <h2 className="text-gray-500">Invested</h2>
          <p className="text-3xl font-bold">
            ${totalInvested.toFixed(2)}
          </p>
        </div>

        <div className="glass">
          <h2 className="text-gray-500">Profit / Loss</h2>
          <p
            className={`text-3xl font-bold ${
              profitLoss >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            ${profitLoss.toFixed(2)}
          </p>
        </div>
      </div>

      {/* HOLDINGS TABLE */}
      <div className="glass mb-6">
        <h2 className="text-2xl font-bold mb-4">
          Holdings 📊
        </h2>

        {stocks.length === 0 ? (
          <p className="text-gray-500">
            No stocks owned yet.
          </p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 text-left">
                <th className="p-3">Symbol</th>
                <th className="p-3">Shares</th>
                <th className="p-3">Avg Price</th>
                <th className="p-3">Value</th>
              </tr>
            </thead>

            <tbody>
              {stocks.map((stock) => {
                const value =
                  (stock.avgPrice + 5) *
                  stock.quantity;

                return (
                  <tr
                    key={stock.symbol}
                    className="border-b border-gray-200"
                  >
                    <td className="p-3 font-bold">
                      {stock.symbol}
                    </td>
                    <td className="p-3">
                      {stock.quantity}
                    </td>
                    <td className="p-3">
                      ${stock.avgPrice.toFixed(2)}
                    </td>
                    <td className="p-3">
                      ${value.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* PERFORMANCE CHART */}
      <PortfolioChart />
    </Layout>
  );
}