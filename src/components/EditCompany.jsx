import React from "react";
import Button from "./Button";

export default function EditCompany() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Edit Company Info</Button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between px-5 py-2 uppercase border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-bold text-gray-500">
                    Edit Company
                  </h3>
                  <button
                    className="p-1 bg-transparent border-0 text-gray-400 rotate-45 float-right text-4xl"
                    onClick={() => setShowModal(false)}
                  >
                    +
                  </button>
                </div>
                {/*body*/}
                <div className="p-6 flex flex-col gap-2">
                  <label htmlFor="name" className="text-green-600">
                    Company Name
                  </label>
                  <input
                    className="border rounded-md border-gray-300 h-9 p-4 focus: outline-none text-md"
                    type="text"
                  />
                  <label htmlFor="address" className="text-green-600">
                    Address
                  </label>
                  <input
                    type="text"
                    className="border rounded-md border-gray-300 h-9 p-4 focus: outline-none text-md"
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end gap-2 p-6 border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-gray-300 h-10 rounded-md px-4 text-gray-500 font-medium"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <Button onClick={() => setShowModal(false)}>Save</Button>
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
