import {
  faContactCard,
  faFolder,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "./HeaderNav.css";

function HeaderNav() {
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById("nav-bar");
      if (window.scrollY > 200) {
        navBar.classList.add("sticky");
      } else {
        navBar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="bg-[#171515] mainHeader px-4 pt-2 h-[70px] font-jim text-white flex items-center justify-between rounded-[20px] w-full"
      id="nav-bar"
    >
      <div className="flex items-center">
        <h1 className="text-[45px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold">
          Shubham Amrawat
        </h1>
      </div>

      <div className="icons text-[22px] flex space-x-6 sm:text-[18px] md:text-[20px] lg:text-[22px]">
        <a href="#home">
          <FontAwesomeIcon icon={faHouse} className="hover:text-red-500" />
        </a>

        <a href="#projects">
          <FontAwesomeIcon icon={faFolder} className="hover:text-red-500" />
        </a>

        <a href="#contact">
          <FontAwesomeIcon
            icon={faContactCard}
            className="hover:text-red-500"
          />
        </a>
      </div>
    </div>
  );
}

export default HeaderNav;
