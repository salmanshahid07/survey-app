import React, { useState } from "react";
import Button from "./Button";
import deleteIcon from "../assets/images/delete-svgrepo-com.svg";

export default function DeleteEmployee({ employee }) {
  const data = employee;
  const [name, setname] = useState(data.name);
  const [email, setemail] = useState(data.email);
  const [id, setid] = useState(data.id);
  const [location, setlocation] = useState(data.location);
  const [designation, setdesignation] = useState(data.designation);
  const [department, setdepartment] = useState(data.department);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <img
        onClick={() => setShowModal(true)}
        src={deleteIcon}
        className="h-4 w-4 p-0.5 bg-gray-300 rounded-sm"
      />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between px-5 py-2 uppercase border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-sm font-bold text-gray-500">
                    Delete Employee
                  </h3>
                  <button
                    className="p-1 bg-transparent border-0 text-gray-400 rotate-45 float-right text-4xl"
                    onClick={() => setShowModal(false)}
                  >
                    +
                  </button>
                </div>
                {/*body*/}
                <div className="p-6 gap-2 grid grid-cols-2">
                  <div className="col-span-2">
                    <div className="text-green-600">Name:</div>
                    <span>{name}</span>
                  </div>
                  <div className="col-span-2">
                    <div className="text-green-600">Email:</div>
                    <span>{email}</span>
                  </div>
                  <div>
                    <div className="text-green-600">Department:</div>
                    <span>{department}</span>
                  </div>
                  <div>
                    <div className="text-green-600">Designation:</div>
                    <span>{designation}</span>
                  </div>
                </div>
                {/*footer*/}
                <div className="px-6 text-red-500 font-bold">
                  Do you want to remove this employee info?
                </div>
                <div className="flex items-center justify-end gap-2 p-6 border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-gray-300 h-10 rounded-md px-4 text-gray-500 font-medium"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-200 h-10 rounded-md px-4 text-red-500 font-medium"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
