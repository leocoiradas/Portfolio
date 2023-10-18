import { useState } from "react";
import "./App.css";
import Home from "./pages/Home"
import Header from "./pages/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-space-background">
      <Header />
      <Home />
    </div>
  );
}

export default App;
