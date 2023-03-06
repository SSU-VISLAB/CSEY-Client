import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import EventModal from "./components/EventModal";
import MainPage from "./pages/MainPage";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
