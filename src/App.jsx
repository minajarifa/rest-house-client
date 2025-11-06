import "./App.css";
import { Outlet } from "react-router-dom";
import Navber from "./Components/Navber/Navber";


function App() {

  return (
    <>
      <div>
        <Navber></Navber>
        <Outlet></Outlet>
      </div>
    </>
  );
}
export default App;
