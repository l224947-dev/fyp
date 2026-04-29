import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // load user from storage on refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("tradenest_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // login
  const login = (email, password) => {
    const fakeUser = { email };

    setUser(fakeUser);
    localStorage.setItem("tradenest_user", JSON.stringify(fakeUser));
  };

  // signup
  const signup = (email, password) => {
    const fakeUser = { email };

    setUser(fakeUser);
    localStorage.setItem("tradenest_user", JSON.stringify(fakeUser));
  };

  // logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("tradenest_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);