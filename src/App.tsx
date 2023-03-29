import "./App.css";
import Navbar from "./core/navbar/navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
