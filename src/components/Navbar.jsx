import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles.js";
import { navLinks } from "../constants/constants.js";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link to="/" className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }} >
          <img src={logo} alt="logo " className="w-14 h-14 object-contain" />
          <p className="text-white text-[18px] font bold cursor-pointer">Dhananjoy <span className="sm:block hidden">Shaw</span>
          </p> </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map((it) => (
              <li key={it.id}
                className={`${active === it.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer `}
                onClick={() => setActive(it.title)}
              >
                <a href={`#${it.id}`}> {it.title}</a>
              </li>
            ))
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
    </nav >
  )
}

export default Navbar;