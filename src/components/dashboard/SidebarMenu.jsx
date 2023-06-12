import React from "react";
import { Link } from "react-router-dom";
import HomeSvg from "../svg/HomeSvg";
import BarsList from "../svg/BarsList";
import MenuBars from "../svg/MenuBars";
import Logout from "../svg/Logout";
import EditProfile from "../svg/EditProfile";

const dashboardMenu = [
  {
    id: 1,
    title: "پیشخوان",
    to: "/dashboard",
    icon: <HomeSvg />,
  },
  {
    id: 2,
    title: "ویرایش پروفایل",
    to: "/edit-profile",
    icon: <EditProfile />,
  },
  {
    id: 3,
    title: "دوره های من",
    to: "/my-courses",
    icon: <MenuBars />,
  },
  {
    id: 4,
    title: "لیست دوره ها",
    to: "/courses-list",
    icon: <BarsList />,
  },
  {
    id: 5,
    title: "خروج",
    to: "/exist",
    icon: <Logout />,
  },
];

const SidebarMenu = () => {
  return (
    <div>
      <ul className="mt-12">
        {dashboardMenu.map((item, index) => {
          return (
            <li key={index} className="flex items-center mr-[41px] mb-[30px]">
              <Link
                to={item.to}
                className="slide-bar-link"
              >
                <span className="ml-[24px]">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <span></span>
    </div>
  );
};

export default SidebarMenu;
