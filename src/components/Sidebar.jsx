import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="glass w-60 min-h-screen p-4 flex flex-col gap-4">
      <Link className="hover:text-blue-500" to="/">
        Dashboard
      </Link>

      <Link className="hover:text-blue-500" to="/trade">
        Trading
      </Link>

      <Link className="hover:text-blue-500" to="/portfolio">
        Portfolio
      </Link>

      <Link className="hover:text-blue-500" to="/transactions">
        History
      </Link>
    </div>
  );
}