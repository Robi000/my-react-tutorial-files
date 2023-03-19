import React, { useState } from "react";
import Tweet from "./tweet";

function App() {
  const [users, setUser] = useState([
    { name: "ed", message: "hello there" },
    { name: "ed2", message: "2hello there" },
    { name: "ed3", message: "3hello there" },
    { name: "ed4", message: "4hello there" },
    { name: "ed5", message: "5hello there" },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet {...user} />
      ))}
    </div>
  );
}

export default App;
