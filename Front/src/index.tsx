import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Allbook from "./pages/Allbook";
import "./index.css";
import User from "./pages/User";
import Employee from "./pages/Employee";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Allbook" element={<Allbook />} />
          <Route path="User" element={<User />} />
          <Route path="Employee" element={<Employee employeeId={0} />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
