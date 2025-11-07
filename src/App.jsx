import "./App.css";
import { Outlet } from "react-router-dom";
import Navber from "./Components/Navber/Navber";
import Footer from "./Components/Footer/Footer";


function App() {

  return (
    <>
      <div className="mx-28">
        <Navber></Navber>
        <div className="mx-10 my-10">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App;
