import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function AppLayout({ children }) {
  
  const EXCLUDED_PATHS = ['/home', '/contact','/about'];
  const location = useLocation();
  const showHeaderFooter = EXCLUDED_PATHS.includes(location.pathname);

  return (
    <div className="h-screen">
      <div className="h-full overflow-x-hidden">
      {showHeaderFooter && <Header />}
        {children}
        {showHeaderFooter && <Footer />}
      </div>
    </div>
  );
}

export default AppLayout;
