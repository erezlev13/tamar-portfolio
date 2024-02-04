import { Outlet } from "react-router-dom";
import Navbar from "../views/NavBar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
