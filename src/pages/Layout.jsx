import Header from "./Header";
import { Outlet } from "react-router-dom";
import styles from ".././components_styles/Layout.module.css"

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout