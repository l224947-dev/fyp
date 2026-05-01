import { useTrade } from "../context/TradeContext";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTrade();

  return (
    <div className="glass flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold">TradeNest 📈</h1>

      <div className="flex gap-4 items-center">
        <button
          onClick={toggleTheme}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}