import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
      fetch("http://localhost:4000/message")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setMessage(data.message);})
          .catch((error) => console.error("Error fetching message:", error));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
