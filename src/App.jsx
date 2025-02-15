import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dasboard";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Hader from "./components/Hader";
import Billing from "./components/Billing";
import Rlt from "./components/Rlt";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/header" element={<Hader />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/rlt" element={<Rlt />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
