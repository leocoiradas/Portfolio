import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-space-background">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout