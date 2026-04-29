import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Signup Page</h2>

      <button onClick={() => navigate("/")}>
        Back to Login
      </button>
    </div>
  );
}