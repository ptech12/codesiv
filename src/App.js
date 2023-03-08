import "./App.css";
import Landing from "./components/Landing";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Login from "./components/Login";

import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";

function App() {
  // return <Landing />;
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route exact path="/codesiv" element={<Login />} />
        <Route exact path="/codesiv/register" element={<Register />} />
        <Route exact path="/codesiv/reset" element={<Reset />} />
        <Route exact path="/codesiv/dashboard" element={<Dashboard />} />
        <Route exact path="/codesiv/code" element={<Landing />} />
        <Route path="*" element={<Navigate to={"/codesiv"} replace />} />
      </Routes>
    </Router>
  )
}

export default App;
