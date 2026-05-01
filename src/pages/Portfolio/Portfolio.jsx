import Layout from "../../components/Layout.jsx";
import { useTrade } from "../../context/TradeContext.jsx";

export default function Portfolio() {
  const { holdings } = useTrade();

  const stocks = Object.values(holdings);

  const totalValue = stocks.reduce((acc, stock) => {
    const marketPrice = stock.avgPrice + 5; // fake movement
    return acc + marketPrice * stock.quantity;
  }, 0);

  const totalInvested = stocks.reduce(
    (acc, stock) => acc + stock.avgPrice * stock.quantity,
    0
  );

  const profitLoss = totalValue - totalInvested;

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Portfolio Dashboard 💼
      </h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Value</h2>
          <p className="text-3xl font-bold">
            ${totalValue.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Invested</h2>
          <p className="text-3xl font-bold">
            ${totalInvested.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Profit / Loss</h2>
          <p
            className={`text-3xl font-bold ${
              profitLoss >= 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            ${profitLoss.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          Holdings 📊
        </h2>

        {stocks.length === 0 ? (
          <p>No stocks owned yet.</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-3">Symbol</th>
                <th className="p-3">Shares</th>
                <th className="p-3">Avg Price</th>
                <th className="p-3">Value</th>
              </tr>
            </thead>

            <tbody>
              {stocks.map((s) => {
                const value =
                  (s.avgPrice + 5) * s.quantity;

                return (
                  <tr
                    key={s.symbol}
                    className="border-b"
                  >
                    <td className="p-3 font-bold">
                      {s.symbol}
                    </td>
                    <td className="p-3">
                      {s.quantity}
                    </td>
                    <td className="p-3">
                      ${s.avgPrice.toFixed(2)}
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
    </Layout>
  );
}