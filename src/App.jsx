import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dasboard";
import Transactions from "./pages/transaction/transaction";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/accounts" element={<></>} />
        <Route path="/investments" element={<></>} />
        <Route path="/credit-cards" element={<></>} />
        <Route path="/loans" element={<></>} />
        <Route path="/services" element={<></>} />
        <Route path="/my-privileges" element={<></>} />
        <Route path="/setting" element={<></>} />
      </Routes>
    </>
  );
}

export default App;