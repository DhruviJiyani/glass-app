import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <div className="h-screen">
      <div className="h-full overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
