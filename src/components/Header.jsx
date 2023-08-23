import React from "react";
import userprofile from "../assets/images/userprofile.jpg";
import Breadcrumbs from "./BreadCrumbs";

export default function Header() {
  return (
    <div class=" text-gray-500 p-10 font-medium ">
      <div className="flex flex-row justify-between">
        <div className=" flex flex-row items-center w-40 justify-between ">
          <img src={userprofile} className="h-10 w-10 rounded-full" />
          <span>Administrator</span>
        </div>

        <ul className=" flex flex-row text-gray-500 font-medium items-center gap-x-4">
          <li>My Account</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="py-9">
        <Breadcrumbs />
      </div>
    </div>
  );
}
