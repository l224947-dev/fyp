

import Layout from "../../components/Layout.jsx";
import { useTrade } from "../../context/TradeContext.jsx";
import heroImage from "../../assets/hero.png";
import "./Home.css";

export default function Home() {
  const { holdings, transactions } = useTrade();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative mb-10 overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={heroImage}
          alt="TradeNest Hero"
          className="w-full h-[500px] object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="px-10 md:px-16 max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to TradeNest 📈
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Master stock trading with real-time simulations,
              portfolio management, and risk-free learning.
            </p>

            <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 shadow-lg">
              Start Trading
            </button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-gray-500 text-lg mb-3">
            Active Holdings
          </h2>
          <p className="text-5xl font-bold text-blue-600">
            {Object.keys(holdings).length}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-gray-500 text-lg mb-3">
            Total Trades
          </h2>
          <p className="text-5xl font-bold text-purple-600">
            {transactions.length}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-gray-500 text-lg mb-3">
            Market Status
          </h2>
          <p className="text-5xl font-bold text-green-500">
            OPEN
          </p>
        </div>
      </section>
    </Layout>
  );
}