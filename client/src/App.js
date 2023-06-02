import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./Component/Router/Navbar";
import Routers from "./Component/Router/Routers";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Routers />
    </div>
  );
}

export default App;
