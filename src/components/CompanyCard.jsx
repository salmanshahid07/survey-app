import React from "react";
import location from "../assets/images/location-pin-svgrepo-com.svg";
import phone from "../assets/images/phone-svgrepo-com.svg";
import link from "../assets/images/link-external-svgrepo-com.svg";
import { Link } from "react-router-dom";

export default function CompanyCard(props) {
  const { company, index } = props;
  return (
    <div key={index} className="bg-gray-100 p-6 pt-2 rounded-xl ">
      <div className="flex flex-row p-4 pl-0 items-center gap-2 min-w-max border-b border-b-gray-300">
        <h1 className="font-medium  ">{company.companyTitle}</h1>
        <img src={link} className="h-4 w-4" />
      </div>

      <div className="mt-4 mb-2 flex flex-row gap-2 items-center">
        <img src={location} className="h-4 w-4 pt-1" />
        <span>{company.address}</span>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <img src={phone} className="h-4 w-4 pt-1" />
        <span>{company.phoneNumber}</span>
      </div>
      <div className="mt-4 flex flex-row gap-2">
        <button className="bg-gray-800 text-white px-3 py-1 rounded-lg">
          <Link to={`/navigations/companies/${index}`}>Edit</Link>
        </button>
        <button className="text-white bg-gray-800 px-3 py-1 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
}
