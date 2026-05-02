import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleLogin = () => {
    login(email);
    navigate("/");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="glass w-96 p-8">
        <h1 className="text-2xl font-bold mb-4">
          Login TradeNest
        </h1>

        <input
          placeholder="Email"
          className="w-full mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}