import "./App.css";
import { Outlet } from "react-router-dom";
import Navber from "./Components/Shared/Navber/Navber";
import Footer from "./Components/Shared/Footer/Footer";



function App() {

  return (
    <>
      <div className="mx-28">
        <Navber></Navber>
        <div className="pt-24 m-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App;
