import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Trading from "./pages/Trading/Trading.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Transactions from "./pages/Portfolio/Transactions.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/trade" element={<Trading />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}