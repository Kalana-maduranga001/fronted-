import { createContext, useContext, useEffect, useState } from "react";
import API from "../api/axios";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    setLoading(false);
    return;
  }

  API.get("/api/auth/me")
    .then((res) => {
      setUser(res.data.user);
      setLoading(false);
    })
    .catch(() => {
      localStorage.removeItem("token");
      setUser(null);
      setLoading(false);
    });
}, []);


  const login = async (email: string, password: string) => {
    const { data } = await API.post("/api/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
