import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-5 fixed">
      <h1 className="text-3xl font-bold mb-10">
        TradeNest
      </h1>

      <nav className="space-y-4">
        <Link
          to="/"
          className="block p-3 rounded-lg hover:bg-slate-700 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/portfolio"
          className="block p-3 rounded-lg hover:bg-slate-700 transition"
        >
          Portfolio
        </Link>

        <Link
          to="/trade"
          className="block p-3 rounded-lg hover:bg-slate-700 transition"
        >
          Trade
        </Link>
      </nav>
    </div>
  );
}