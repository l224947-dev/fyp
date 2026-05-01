export default function ProfitChart() {
  const data = [20, 40, 30, 60, 80, 50, 90];

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">
        Profit Trend 📈
      </h2>

      <div className="flex items-end gap-2 h-40">
        {data.map((val, i) => (
          <div
            key={i}
            style={{ height: `${val}%` }}
            className="w-6 bg-green-500 rounded"
          ></div>
        ))}
      </div>
    </div>
  );
}