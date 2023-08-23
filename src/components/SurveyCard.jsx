import React from "react";
import location from "../assets/images/location-pin-svgrepo-com.svg";
import phone from "../assets/images/phone-svgrepo-com.svg";
import link from "../assets/images/link-external-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { ReactComponent as CalenderIcon } from "../assets/images/calender-svgrepo-com.svg";

export default function SurveyCard(props) {
  const { survey, index } = props;
  const { title, company, description, startDate, endDate, status } = survey;
  return (
    <div key={index} className="bg-gray-100 p-6 pt-2 rounded-xl ">
      <div className="flex flex-col p-4 pl-0 items-start gap-2 border-b border-b-gray-300">
        <h1 className="font-bold uppercase flex-wrap text-xl">{title}</h1>
        <div className="font-bold text-gray-500">{company}</div>
      </div>

      <div className="mt-4 mb-2 flex flex-row gap-2 items-center">
        <div className="text-gray-400 font-medium">{description}</div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex flex-row gap-2 items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <CalenderIcon className="h-5 w-5 fill-gray-400" />
            <span className="text-gray-400 font-medium">Start Date</span>
          </div>
          <span className="text-gray-400 font-medium">{"09/08/2023"}</span>
        </div>
        <div className="flex flex-row gap-2 items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <CalenderIcon className="h-5 w-5 fill-gray-400" />
            <span className="text-gray-400 font-medium">End Date</span>
          </div>
          <span className="text-gray-400 font-medium">{"09/08/2023"}</span>
        </div>
        <div className="flex flex-row gap-2 items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <img src={phone} className="h-5 w-5" />
            <span className="text-gray-400 font-medium">Status</span>
          </div>
          <span className="text-gray-400 font-medium">{status}</span>
        </div>
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
