import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {

  const links = [
    { id: 1, title: "خانه", to: "/home" },
    { id: 2, title: "آموزش", to: "/education" },
    { id: 3, title: "بلاگ", to: "/blog" },
    { id: 4, title: "خدمات", to: "/services" },
    { id: 5, title: "دوره ها", to: "/courses" },
    { id: 5, title: "تماس با ما", to: "/contact-us" },
  ];

  return (
    <div className="">
      <ul className="flex">
        {links.map((link, index) => {
          return (
            <li className="font-vazirmatn mx-3 text-xl text-navLinks_purple hover:text-deep_pink hover:scale-110 transition-all" key={index}>
              <NavLink to={link.to}>{link.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
