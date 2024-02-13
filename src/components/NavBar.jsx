import { ArrowUpRightFromCircle } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-5">
      <div className="text-2xl font-light">OurPortfolio</div>
      <nav className="hidden md:flex gap-2">
        <Link className="font-extralight hover:underline ease-linear" to={"#"}>About me</Link>
        <Link className="font-extralight hover:underline ease-linear" to={"#"}>Use Cases</Link>
        <Link className="font-extralight hover:underline ease-linear" to={"#"}>Designs</Link>
      </nav>
      <div className="flex bg-primary rounded-full px-2 py-1 text-bg ">
        <button className="flex gap-1 px-2">Get Started <ArrowUpRightFromCircle className="w-4"/></button>
      </div>
    </header>
  );
};

export default NavBar;
