import React from "react";
import { useParams } from "react-router-dom";
import companies from "../companiesData";
import edit from "../assets/images/edit-svgrepo-com.svg";
import deleteIcon from "../assets/images/delete-svgrepo-com.svg";
import userIcon from "../assets/images/user-svgrepo-com.svg";
import companyIcon from "../assets/images/company-svgrepo-com.svg";
import Button from "./Button";
import EditCompany from "./EditCompany";
import EditEmployee from "./EditEmployee";
import DeleteEmployee from "./DeleteEmployee";
import DeleteDepartment from "./DeleteDepartment";
import EditDepartment from "./EditDepartment";
import AddEmployee from "./AddEmployee";
import AddDepartment from "./AddDepartment";
import UpdateLogo from "./UpdateLogo";

export default function CompanyDetails() {
  const { id } = useParams();
  const company = companies[id];
  return (
    <div className=" p-10 pt-0 flex flex-col gap-10">
      <div className="h-12 flex flex-row items-center justify-end">
        <div className="flex flex-row gap-2">
          <EditCompany />
          <UpdateLogo />
        </div>
      </div>
      <div className="bg-gray-100 h-28 rounded-lg flex flex-row justify-between items-center p-8">
        <div>
          <h1 className="text-xl font-bold">{company.companyTitle}</h1>
          <span>{company.address}</span>
        </div>
        <div>Logo</div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="bg-gray-100 h-max  w-[30%] rounded-lg p-6">
          <div className="font flex flex-row items-center gap-2">
            <span className="font-medium">Departments</span> <AddDepartment />
          </div>
          <div>All the departments are listed below.</div>
          <ul className="py-8">
            {company.departments.map((department) => {
              return (
                <li className="pb-2 flex flex-row gap-2 items-center">
                  <EditDepartment data={department} />
                  <DeleteDepartment department={department} />
                  <span>{department}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bg-gray-100 w-4/6 rounded-lg p-6">
          <div className="font flex flex-row items-center gap-2">
            <span className="font-medium">Employees</span>{" "}
            <AddEmployee company={company} />
          </div>
          <div>All the employees are listed below.</div>
          <div className="flex flex-col py-10">
            {company.employees.map((employee) => {
              return (
                <div className="flex flex-row">
                  <div className="flex flex-row items-center gap-2 p-3 border-collapse border-black border w-[60%]">
                    {/* <img
                      src={edit}
                      className="h-4 w-4 p-0.5 bg-gray-300 rounded-sm"
                    />{" "} */}
                    <EditEmployee company={company} employee={employee} />
                    {/* <img
                      src={deleteIcon}
                      className="h-4 w-4 p-0.5 bg-gray-300 rounded-sm"
                    /> */}
                    <DeleteEmployee employee={employee} />
                    <img
                      src={userIcon}
                      className="h-4 w-4 p-0.5 bg-gray-300 rounded-sm"
                    />
                    <span>{employee.name}</span>
                  </div>
                  <div className="flex flex-row items-center gap-2 p-3 border-collapse border-black border w-[40%]">
                    <img src={companyIcon} className="h-4 w-4 p-0.5" />
                    <span>{employee.department}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
