import React from "react";
import companies from "../companiesData";
import Button from "./Button";
import CompanyCard from "./CompanyCard";
import Modal from "./Modal";
import { Outlet } from "react-router-dom";

export default function Companies() {
  return (
    <div class="p-10 pt-0 flex flex-col gap-10 ">
      <div className="h-12 flex flex-row items-center justify-end">
        <div className="flex flex-row gap-2">
          {/* <Button onClick={() => console.log("hello")}>Create New</Button> */}
          <Modal />
        </div>
      </div>
      <div className=" h-max grid grid-cols-3 gap-4">
        {companies.map((company, index) => {
          return <CompanyCard company={company} index={index} />;
        })}
      </div>
      <Outlet />
    </div>
  );
}
