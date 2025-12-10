import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="relative min-h-screen md:flex">
      <div>
      {/* sideber */}
        <Sidebar/>
      </div>
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
      {/* outline dynamic content */}
    </div>
  );
}
