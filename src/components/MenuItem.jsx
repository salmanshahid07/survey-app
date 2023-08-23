import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MenuItem = ({ path, icon: Icon, title, subMenuItems }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [subMenu, setSubMenu] = useState(false);

  const isActive = location.pathname.includes(path);
  const toggleSubMenu = () => setSubMenu(!subMenu);

  const handleClick = () => {
    if (subMenuItems) {
      toggleSubMenu();
    } else {
      navigate(path);
    }
  };

  return (
    <li
      className={`flex select-none ${
        subMenu ? "flex-col" : ""
      } rounded-md p-2 cursor-pointer ${
        isActive
          ? "bg-gray-800 opacity-100"
          : "hover:bg-gray-800 hover:opacity-100 duration-5"
      } min-w-full text-gray-300 text-sm gap-x-4 mt-2 `}
      onClick={handleClick}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-2 items-center">
          <Icon
            className={`h-4 w-4 ${
              isActive
                ? "fill-green-600 stroke-green-600"
                : "fill-gray-400 stroke-gray-400"
            }`}
          />
          <span
            className={`font-medium ${
              isActive ? "text-green-600" : "text-gray-400"
            }`}
          >
            {title}
          </span>
        </div>
        {/* {subMenuItems && (
          <div
            className={`text-xl duration-300 ${
              subMenu && "duration-300 -rotate-45"
            } ${
              location.pathname.includes("/surveys")
                ? "text-green-600"
                : "text-gray-400"
            }`}
          >
            +
          </div>
        )} */}
      </div>
      {subMenu && (
        <div className="flex flex-col gap-2 px-6 py-4">
          {subMenuItems.map((subMenuItem) => (
            <span
              key={subMenuItem.path}
              onClick={() => navigate(subMenuItem.path)}
              className={`font-medium ${
                location.pathname.includes(subMenuItem.path)
                  ? "text-green-600"
                  : "text-gray-400"
              }`}
            >
              {subMenuItem.title}
            </span>
          ))}
        </div>
      )}
    </li>
  );
};

export default MenuItem;
