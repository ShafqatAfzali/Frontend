import { Route, Routes } from "react-router-dom";
import Home from "./pages/hjem"
import Kasse from "./pages/kasse"
import Confirmed from "./pages/confirmed"
import Admin from "./pages/admin"
import Hovedadmin from "./pages/Hovedadmin";

export default function App() {
  return <div className="alt">
    <Routes >
    <Route path="/" element={<Home/>} />
      <Route path="/kasse" element={<Kasse/>} />
      <Route path="/confirmed" element={<Confirmed/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/hoved_admin" element={<Hovedadmin/>} />
    </Routes>
    </div>
}

