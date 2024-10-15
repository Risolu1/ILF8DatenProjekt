import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import icon from "../../assets/icon.svg";
import "./App.css";
import Moin from "./components/moin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Moin />} />
      </Routes>
    </Router>
  );
}
