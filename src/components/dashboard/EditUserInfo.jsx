import React from "react";
// import { Link } from "react-router-dom";
import userEdit from "../../assets/images/dashboard/user-edit.png";

const userInfo = [
  { id: 1, title: "نام کاربری" },
  { id: 2, title: "ایمیل" },
  { id: 3, title: "تاریخ تولد" },
  { id: 4, title: "رمز عبور" },
  { id: 5, title: "کد ملی" },
  { id: 6, title: "شماره همراه" },
];

const EditUserInfo = () => {
  return (
    <div className="bg-light_gray w-[1281px] flex justify-center items-center rounded-3xl ">
      <ul className="grid grid-cols-2 gap-5 my-[35px]">
        {userInfo.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-between pr-2 bg-white rounded-3xl w-[580px] h-[100px]  "
            >
              <div className="flex flex-col">
                <span className="mb-[6px] font-vazirmatn text-lg pr-2">
                  {item.title}
                </span>
                <input
                  style={{ background: "transparent" }}
                  className="placeholder-gray-500 outline-none font-vazir_exLight text-[22px] 
                pr-2 placeholder-opacity-0 w-[400px] h-[35px] text-navLinks_purple font-bold "
                  type="text"
                  // placeholder={item.title}
                />
              </div>
              <span className="ml-[45px] mb-[20px] ">
                <img className="" src={userEdit} alt="user-edit" />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EditUserInfo;
