import React, { useState } from "react";
import mehdi from "../../assets/images/dashboard/mehdi.png";
import SidebarMenu from "../../components/dashboard/SidebarMenu";
import UserImageSidebar from "../../components/dashboard/UserImageSidebar";
import EditUserInfo from "../../components/dashboard/EditUserInfo";

const fade = {
  transition: " background-color 1s",
};

const Dashboard = () => {
  const [userInfoEditModal, setUserInfoEditModal] = useState(false);

  return (
    <div className="flex justify-evenly w-[1774px] h-[750px] mx-auto mt-[25px]">
      <div className="border border-lightgray border-gray-200 ml-16 w-[358px] rounded-3xl">
        <UserImageSidebar />
        <SidebarMenu />
      </div>
      <div className="border border-lightgray flex-1 w-[1358px] rounded-3xl">
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <img
              className="w-[175px] h-[175px] my-[25px] rounded-full"
              src={mehdi}
              alt="navbar-avatar"
            />
          </div>
          <EditUserInfo />
          <button
          style={fade}
            onClick={() => {
              setUserInfoEditModal(true);
            }}
            className="bg-navLinks_purple font-vazirmatn mt-8 text-white hover:bg-deep_pink rounded text-xl w-[300px] h-[55px]"
          >
            ویرایش
          </button>

          {userInfoEditModal && (
            <div className="bg-light_gray w-[1358px] top-[345px] flex flex-col items-center justify-center  h-[550px] z-50 absolute rounded-3xl shadow-xl">
              <h1 className="font-vazir_light top-10 text-2xl absolute text-navLinks_purple">
                لطفا اطلاعات خود را با دقت ویرایش کنید.
              </h1>
              <EditUserInfo />
              <button
                style={fade}
                className="absolute left-[39%] bg-darkviolet hover:bg-navLinks_purple top-[29.50rem] w-[300px] h-[55px] font-vazirmatn text-xl text-white rounded"
                onClick={() => setUserInfoEditModal(false)}
              >
                ثبت ویرایش
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// .ReactModal__Overlay {
//   opacity: 0;
//   transform: translateX(-100px);
//   transition: all 500ms ease-in-out;
// }

// .ReactModal__Overlay--after-open {
//   opacity: 1;
//   transform: translateX(0px);
// }

// .ReactModal__Overlay--before-close {
//   opacity: 0;
//   transform: translateX(-100px);
// }
