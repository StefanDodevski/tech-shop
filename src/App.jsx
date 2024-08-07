import { Outlet } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  );
}

export default App;
