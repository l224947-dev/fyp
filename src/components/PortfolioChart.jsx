import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PortfolioChart() {
  const data = [
    { day: "Mon", value: 1000 },
    { day: "Tue", value: 1200 },
    { day: "Wed", value: 1100 },
    { day: "Thu", value: 1500 },
    { day: "Fri", value: 1700 },
    { day: "Sat", value: 1600 },
    { day: "Sun", value: 1900 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">
        Portfolio Performance 📈
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}