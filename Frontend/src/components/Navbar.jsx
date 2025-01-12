import { MenuIcon, Search, X } from "lucide-react";
import React, { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 max-w-6xl mx-auto">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="mb-1">
            <img
            className="h-8" 
            src="./logo.png" alt="" />
          </div>

          {/* Hamburger Icon for Mobile View */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" hover:text-blue-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>

          {/* Links Section */}
          <div
            className={`lg:flex items-center space-x-6 ${
              isOpen ? "block" : "hidden"
            } lg:block`}
          >
            <div className="flex flex-col lg:flex-row lg:space-x-9 space-y-2 lg:space-y-0 p-2 m-4">
              <a href="#" className="hover:text-[#FF6D34]">
                Courses
              </a>
              <a href="#" className="hover:text-[#FF6D34]">
                Jobs
              </a>
              <a href="#" className="hover:text-[#FF6D34]">
                Shops
              </a>
              <a href="#" className="hover:text-[#FF6D34]">
                Discover
              </a>
              <a href="#" className="hover:text-[#FF6D34]">
                Degree Program
              </a>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0">
              <button className="px-4 py-3 rounded-full bg-[#FF6D34]">
                For Colleges
              </button>
              <button className="px-4 py-3 border border-[#29CC7A] rounded-full hover:bg-[#FF6D34]">
                Need Help?
              </button>
              <div className="items-center flex">
              <Search size={30}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






