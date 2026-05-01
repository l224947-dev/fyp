import Layout from "../../components/Layout";
import MarketTicker from "../../components/MarketTicker";
import { useTrade } from "../../context/TradeContext";

export default function Home() {
  const { holdings, transactions } = useTrade();

  const totalStocks = Object.keys(holdings).length;
  const totalTrades = transactions.length;

  return (
    <>
      {/* LIVE MARKET TICKER */}
      <MarketTicker />

      <Layout>
        {/* HERO */}
        <div className="relative rounded-2xl overflow-hidden mb-10">
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white p-16 relative">

            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>

            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-4">
                TradeNest 📈
              </h1>

              <p className="text-lg max-w-2xl text-gray-200">
                A modern stock trading simulation platform with
                real-time market behavior, portfolio tracking, and
                trading analytics.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="/trade"
                  className="bg-green-500 px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition"
                >
                  Start Trading
                </a>

                <a
                  href="/portfolio"
                  className="bg-white text-black px-6 py-3 rounded-lg font-bold"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Active Positions</h2>
            <p className="text-3xl font-bold">{totalStocks}</p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Total Trades</h2>
            <p className="text-3xl font-bold">{totalTrades}</p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Market Mode</h2>
            <p className="text-3xl font-bold">Simulation</p>
          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow hover:scale-[1.02] transition">
            <h3 className="text-xl font-bold mb-2">
              📊 Live Market Simulation
            </h3>
            <p>
              Prices update dynamically to simulate real market
              behavior.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow hover:scale-[1.02] transition">
            <h3 className="text-xl font-bold mb-2">
              💼 Portfolio Tracking
            </h3>
            <p>
              Track profit, loss, and holdings in real time.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow hover:scale-[1.02] transition">
            <h3 className="text-xl font-bold mb-2">
              ⚡ Instant Execution
            </h3>
            <p>
              Buy and sell stocks instantly with simulated market
              execution.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow hover:scale-[1.02] transition">
            <h3 className="text-xl font-bold mb-2">
              🔐 Learning Platform
            </h3>
            <p>
              Risk-free environment to learn trading strategies.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}