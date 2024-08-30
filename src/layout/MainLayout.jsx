// First install react-router-dom: npm i react-router-dom
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </>
  );
}

export default MainLayout;
