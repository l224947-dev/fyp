import Layout from "../../components/Layout.jsx";

const stocks = [
  { symbol: "AAPL", price: 192 },
  { symbol: "TSLA", price: 248 },
  { symbol: "GOOGL", price: 176 },
];

export default function Trading() {
  return (
    <Layout>
      {/* HEADER IMAGE */}
      <img
        src="/images/trading.jpg"
        className="w-full h-48 object-cover rounded-xl mb-6"
      />

      <h1 className="text-4xl font-bold mb-6">
        Market Trading 📈
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {stocks.map((s) => (
          <div key={s.symbol} className="glass">
            <h2 className="text-xl font-bold">
              {s.symbol}
            </h2>
            <p className="text-2xl">${s.price}</p>

            <button className="mt-4 bg-blue-500 px-4 py-2 rounded-lg text-white">
              Trade
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
}