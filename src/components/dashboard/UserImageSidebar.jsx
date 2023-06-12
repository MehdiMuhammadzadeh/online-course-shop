import React from "react";
import mehdi from "../../assets/images/dashboard/mehdi.png";

const UserImageSidebar = () => {
  return (
    <div className="flex justify-evenly items-center mt-[33px]">
      <div className="w-[112px] h-[112px]">
        <img src={mehdi} alt="" className="rounded-full" />
      </div>
      <h1 className="text-xl font-shabnam_bold text-gray">مهدی محمدزاده</h1>
    </div>
  );
};

export default UserImageSidebar;
