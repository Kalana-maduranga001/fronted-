import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Login Successful");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
