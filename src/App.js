import Login from "./components/login";
import Navbar from "./components/navbar";
import UserOtp from "./components/register";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Outlet/>
    </div>
  );
}

export default App;
