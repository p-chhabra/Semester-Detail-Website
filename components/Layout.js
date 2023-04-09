import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-[#121212] h-screen flex flex-col items-center p-10">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
