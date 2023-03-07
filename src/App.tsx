import { useState } from "react";
import BottomNavbar from "./components/BottomNavbar";
import { Div } from "./AppStyles";
import reactLogo from "./assets/react.svg";
import "./App.css";
import EventModal from "./components/EventModal";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Div>
      {/* <MainPage /> */}
      <BottomNavbar />
    </Div>
  );
}

export default App;
