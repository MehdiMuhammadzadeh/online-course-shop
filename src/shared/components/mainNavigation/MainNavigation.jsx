import React, { useState } from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import navbarAvatr from "../../../assets/images/mainNavigation/navbar-avatar.png";
import mehdi from "../../../assets/images/dashboard/mehdi.png";
import ShoppinBasket from "../../../components/svg/ShoppinBasket";
import Search from "../../../components/svg/Search";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  const [openInputModal, setOpenInputModal] = useState(false);

  return (
    <MainHeader>
      <div className="flex items-center justify-between mt-6">
        <nav className="flex items-center">
          <img
            className="mr-[72px] ml-[41px]"
            style={{ width: "70px", height: "70px" }}
            src={navbarAvatr}
            alt="navbar-avatar"
          />
          <NavLinks />
        </nav>
        {/* {openInputModal && (
          <input
            type="text"
            className="bg-lightgray w-[750px] h-[50px] rounded-lg p-5 font-vazir_semiB outline-none text-navLinks_purple"
            placeholder=" جستجو کنید ..."
          />
        )} */}
        <ul className="flex items-center justify-center ml-[72px]">
        {openInputModal && (
          <li>
          <input 
            type="text"
            className="bg-light_thin_purple w-[400px] -z-0 h-[65px] rounded-full p-5 font-vazir_semiB outline-none text-navLinks_purple"
            placeholder=" جستجو کنید ..."
            //   absolute top-[27px] left-[262px] 
          />
          </li>
          )}
          <li className="bg-light_thin_purple w-[65px] flex items-center justify-center h-[65px] rounded-full">
            <Link
              onClick={() => {
                setOpenInputModal(!openInputModal);
              }}
            >
              <Search className="z-50"/>
            </Link>
          </li>
          <li className="bg-light_thin_purple w-[65px] h-[65px] flex items-center justify-center  mr-6 rounded-full">
            {/* <img src={shoppingCart} alt="shopping-art-icon" /> */}
            <ShoppinBasket />
          </li>
          <li className="bg-light_thin_purple flex items-center justify-center w-[65px] h-[65px] mr-6  rounded-full">
            <img className="w-full h-full rounded-full" src={mehdi} alt="" />
            <span></span>
          </li>
        </ul>
      </div>
    </MainHeader>
  );
};

export default MainNavigation;
