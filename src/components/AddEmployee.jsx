import React, { useState } from "react";
import Button from "./Button";
import edit from "../assets/images/edit-svgrepo-com.svg";

export default function AddEmployee({ company }) {
  const { departments } = company;
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [id, setid] = useState("");
  const [location, setlocation] = useState("");
  const [designation, setdesignation] = useState("");
  const [department, setdepartment] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="grid place-content-center pb-1 h-4 w-4 bg-green-600 rounded-sm text-white cursor-pointer"
      >
        <div className="">+</div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between px-5 py-2 uppercase border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-sm font-bold text-gray-500">
                    Add Employee
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
                  <div>
                    <label htmlFor="name" className="text-green-600">
                      Employee Name
                    </label>
                    <input
                      className="border rounded-md  max-w-full border-gray-300 mt-2 h-9 p-4 focus: outline-none text-md"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="text-green-600">
                      Email
                    </label>
                    <input
                      type="text"
                      className="border rounded-md  max-w-full border-gray-300 mt-2 h-9 p-4 focus: outline-none text-md"
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="text-green-600">
                      Employee ID
                    </label>
                    <input
                      type="text"
                      className="border rounded-md  max-w-full border-gray-300 mt-2 h-9 p-4 focus: outline-none text-md"
                      value={id}
                      onChange={(e) => {
                        setid(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="text-green-600">
                      Designation
                    </label>
                    <input
                      type="text"
                      className="border rounded-md  max-w-full border-gray-300 mt-2 h-9 p-4 focus: outline-none text-md"
                      value={designation}
                      onChange={(e) => {
                        setdesignation(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="text-green-600">
                      Location
                    </label>
                    <input
                      type="text"
                      className="border rounded-md max-w-full border-gray-300 mt-2 h-9 p-4 focus: outline-none text-md"
                      value={location}
                      onChange={(e) => {
                        setlocation(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="text-green-600">
                      Department
                    </label>
                    <select
                      value={department}
                      className="border rounded-md max-w-full min-w-full border-gray-300 mt-2 h-9 px-3 focus: outline-none text-black text-md"
                      onChange={(e) => {
                        setdepartment(e.target.value);
                      }}
                    >
                      {departments.map((option) => (
                        <option value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end gap-2 p-6 border-solid border-slate-200 rounded-b">
                  <Button onClick={() => setShowModal(false)}>Add</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
