import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-[#121212] h-full text-center pt-10">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
