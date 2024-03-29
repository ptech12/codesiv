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
import CodeSandbox from "./components/CodeSandbox";

function App() {
  // return <Landing />;
  return (
    <Router>
      <Routes>
        <Route  exact path="/" element={<Login />} />
        {/* <Route exact path="/codesiv" element={<Login />} /> */}
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/code" element={<Landing />} />
        <Route exact path="/react-code" element={<CodeSandbox />} />

        <Route path="*" element={<Navigate to={"/codesiv"} replace />} />
      </Routes>
    </Router>
  )
}

export default App;
