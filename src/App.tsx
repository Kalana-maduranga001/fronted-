
import { useState , useEffect } from "react";
import "./App.css"

function App(){
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000")
    .then(response => response.text())
    .then(data => setMessage(data))
    .catch(error => console.error("Failed to connect Server :", error));
  } , []);

  return (
    <div style={{ padding: 20 }}>
      <h1>React Frontend (TypeScript)</h1>
      <p>Backend says: {message}</p>
    </div>
  );

}

export default App;