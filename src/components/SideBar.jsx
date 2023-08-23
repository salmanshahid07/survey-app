// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ReactComponent as DashboardIcon } from "../assets/images/dashboard-1-svgrepo-com.svg";
// import { ReactComponent as CompanyIcon } from "../assets/images/company-svgrepo-com.svg";
// import { ReactComponent as SurveyIcon } from "../assets/images/survey-svgrepo-com.svg";
// import { ReactComponent as UserIcon } from "../assets/images/users-svgrepo-com.svg";
// import circle from "../assets/images/circle-dot-svgrepo-com.svg";

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [subMenu, setsubMenu] = useState(false);

//   return (
//     <div className="bg-gray-900 w-1/6 text-white h-full flex flex-col fixed">
//       <div className="h-screen p-5 pt-8">
//         <div className="flex gap-x-4 items-center justify-between">
//           <div className="text-green-500 pb-1 text-center justify-center items-center origin-left font-medium text-xl">
//             Survey App
//           </div>
//           <div>
//             <img src={circle} className="h-5 w-5 fill-gray-400" alt="circle" />
//           </div>
//         </div>

//         <ul className="flex flex-col items-start">
//           <div className="mt-14 mb-2 pl-2 uppercase text-xs font-bold text-gray-500">
//             Navigations
//           </div>
//           <li
//             className={`flex rounded-md p-2 cursor-pointer ${
//               location.pathname.includes("/dashboard")
//                 ? "bg-gray-800 opacity-100"
//                 : "hover:bg-gray-800 hover:opacity-100 duration-5"
//             } min-w-full text-gray-300 text-sm items-center gap-x-4 mt-2 `}
//             onClick={() => navigate("/dashboard")}
//           >
//             <div className="flex gap-2 items-center">
//               <DashboardIcon
//                 className={`h-4 w-4 ${
//                   location.pathname.includes("/dashboard")
//                     ? "fill-green-600 stroke-green-600"
//                     : "fill-gray-400 stroke-gray-400"
//                 }`}
//               />
//               <span
//                 className={`font-medium ${
//                   location.pathname.includes("/dashboard")
//                     ? "text-green-600"
//                     : "text-gray-400"
//                 }`}
//               >
//                 Dashboard
//               </span>
//             </div>
//           </li>
//           <li
//             className={`flex rounded-md p-2 cursor-pointer ${
//               location.pathname.includes("/companies")
//                 ? "bg-gray-800 opacity-100"
//                 : "hover:bg-gray-800 hover:opacity-100 duration-5"
//             } min-w-full text-gray-300 text-sm items-center gap-x-4 mt-2 `}
//             onClick={() => navigate("/companies")}
//           >
//             <div className="flex gap-2 items-center">
//               <CompanyIcon
//                 className={`h-4 w-4 ${
//                   location.pathname.includes("/companies")
//                     ? "fill-green-600 stroke-green-600"
//                     : "fill-gray-400 stroke-gray-400"
//                 }`}
//               />
//               <span
//                 className={`font-medium ${
//                   location.pathname.includes("/companies")
//                     ? "text-green-600"
//                     : "text-gray-400"
//                 }`}
//               >
//                 Companies
//               </span>
//             </div>
//           </li>
//           <li
//             className={`flex flex-col rounded-md p-2 cursor-pointer ${
//               location.pathname.includes("/surveys")
//                 ? "bg-gray-800 opacity-100"
//                 : "hover:bg-gray-800 hover:opacity-100 duration-5"
//             } min-w-full text-gray-300 text-sm gap-x-4 mt-2 `}
//             onClick={() => setsubMenu(!subMenu)}
//           >
//             <div className="flex gap-2 items-center justify-between">
//               <div className="flex flex-row items-center gap-2">
//                 <SurveyIcon
//                   className={`h-4 w-4 ${
//                     location.pathname.includes("/surveys")
//                       ? "fill-green-600 stroke-green-600"
//                       : "fill-gray-400 stroke-gray-400"
//                   }`}
//                 />
//                 <span
//                   className={`font-medium ${
//                     location.pathname.includes("/surveys")
//                       ? "text-green-600"
//                       : "text-gray-400"
//                   }`}
//                 >
//                   Surveys
//                 </span>
//               </div>
//               <div
//                 className={`text-xl duration-300 select-none ${
//                   subMenu && "duration-300 -rotate-45"
//                 } ${
//                   location.pathname.includes("/surveys")
//                     ? "text-green-600"
//                     : "text-gray-400"
//                 }`}
//               >
//                 +
//               </div>
//             </div>
//             {subMenu && (
//               <div className="flex flex-col gap-2 px-6 py-4">
//                 <span
//                   onClick={() => {
//                     navigate("/surveys/createnew");
//                   }}
//                   className={`font-medium ${
//                     location.pathname.includes("/surveys/createnew")
//                       ? "text-green-600"
//                       : "text-gray-400"
//                   }`}
//                 >
//                   Create New
//                 </span>
//                 <span
//                   onClick={() => {
//                     navigate("/surveys/viewall");
//                   }}
//                   className={`font-medium ${
//                     location.pathname.includes("/surveys/viewall")
//                       ? "text-green-600"
//                       : "text-gray-400"
//                   }`}
//                 >
//                   View All
//                 </span>
//               </div>
//             )}
//           </li>
//           <li
//             className={`flex rounded-md p-2 cursor-pointer ${
//               location.pathname.includes("/users")
//                 ? "bg-gray-800 opacity-100"
//                 : "hover:bg-gray-800 hover:opacity-100 duration-5"
//             } min-w-full text-gray-300 text-sm items-center gap-x-4 mt-2 `}
//             onClick={() => navigate("/users")}
//           >
//             <div className="flex gap-2 items-center">
//               <UserIcon
//                 className={`h-4 w-4 ${
//                   location.pathname.includes("/users")
//                     ? "fill-green-600 stroke-green-600"
//                     : "fill-gray-400 stroke-gray-400"
//                 }`}
//               />
//               <span
//                 className={`font-medium ${
//                   location.pathname.includes("/users")
//                     ? "text-green-600"
//                     : "text-gray-400"
//                 }`}
//               >
//                 Dashboard
//               </span>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import circle from "../assets/images/circle-dot-svgrepo-com.svg";
import { ReactComponent as DashboardIcon } from "../assets/images/dashboard-1-svgrepo-com.svg";
import { ReactComponent as CompanyIcon } from "../assets/images/company-svgrepo-com.svg";
import { ReactComponent as SurveyIcon } from "../assets/images/survey-svgrepo-com.svg";
import { ReactComponent as UserIcon } from "../assets/images/users-svgrepo-com.svg";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  return (
    <div className="bg-gray-900 w-1/6 text-white h-full flex flex-col fixed">
      <div className="h-screen p-5 pt-8">
        <div className="flex gap-x-4 items-center justify-between">
          <div className="text-green-500 pb-1 text-center justify-center items-center origin-left font-medium text-xl">
            Survey App
          </div>
          <div>
            <img src={circle} className="h-5 w-5 fill-gray-400" alt="circle" />
          </div>
        </div>

        <ul className="flex flex-col items-start">
          <div className="mt-14 mb-2 pl-2 uppercase text-xs font-bold text-gray-500">
            Navigations
          </div>
          <MenuItem
            path="/navigations/dashboard"
            icon={DashboardIcon}
            title="Dashboard"
          />
          <MenuItem
            path="/navigations/companies"
            icon={CompanyIcon}
            title="Companies"
          />
          <MenuItem
            path="/surveys"
            icon={SurveyIcon}
            title="Surveys"
            subMenuItems={[
              { path: "/navigations/surveys/createnew", title: "Create New" },
              { path: "/navigations/surveys/viewall", title: "View All" },
            ]}
          />
          <MenuItem path="/navigations/users" icon={UserIcon} title="Users" />
        </ul>
      </div>
    </div>
  );
}
