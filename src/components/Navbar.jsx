import { useTrade } from "../context/TradeContext";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTrade();

  return (
    <nav className="flex justify-between items-center bg-slate-900 text-white px-6 py-4">
      <h1 className="text-2xl font-bold">
        TradeNest
      </h1>

      <button
        onClick={toggleTheme}
        className="bg-white text-black px-4 py-2 rounded-lg"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}