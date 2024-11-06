import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

function Layout() {
  return (
    <div className=" relative w-full h-full">
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default Layout;
