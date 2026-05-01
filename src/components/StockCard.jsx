export default function StockCard({ symbol, price, change }) {
  const positive = change >= 0;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h2 className="text-2xl font-bold">{symbol}</h2>

      <p className="text-3xl mt-3">${price}</p>

      <p
        className={`mt-2 font-semibold ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        {positive ? "+" : ""}
        {change}%
      </p>
    </div>
  );
}