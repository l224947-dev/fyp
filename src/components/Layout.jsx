import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useTrade } from "../context/TradeContext";

export default function Layout({ children }) {
  const { darkMode } = useTrade();

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-gray-100 text-black min-h-screen"
      }
    >
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}