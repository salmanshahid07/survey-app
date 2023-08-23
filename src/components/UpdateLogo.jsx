import React, { useState } from "react";
import Button from "./Button";
import edit from "../assets/images/edit-svgrepo-com.svg";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function UpdateLogo({}) {
  const [file, setfile] = useState(null);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Update Logo</Button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between px-5 py-2 uppercase border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-sm font-bold text-gray-500">
                    Update Logo
                  </h3>
                  <button
                    className="p-1 bg-transparent border-0 text-gray-400 rotate-45 float-right text-4xl"
                    onClick={() => setShowModal(false)}
                  >
                    +
                  </button>
                </div>
                {/*body*/}
                <div className="p-6 gap-2 flex flex-col justify-center items-center">
                  <div className="grid place-content-center h-40 min-w-full border-dashed border-2 border-gray-500 rounded-md">
                    <FileUploader
                      handleChange={(file) => {
                        setfile(file);
                      }}
                      name="file"
                      types={fileTypes}
                    >
                      Upload / Drag logo here!
                    </FileUploader>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end gap-2 p-6 pt-0 border-solid border-slate-200 rounded-b">
                  <Button onClick={() => setShowModal(false)}>Upload</Button>
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
