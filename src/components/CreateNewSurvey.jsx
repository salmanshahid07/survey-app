import React, { useState } from "react";
import Button from "./Button";
import DateInput from "./DateInput";

export default function CreateNewSurvey() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [company, setcompany] = useState("Select One");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status, setstatus] = useState("Publish");

  const resetForm = () => {
    settitle("");
    setdescription("");
    setcompany("Select One");
    setStartDate(null);
    setEndDate(null);
    setstatus("Publish");
  };

  const handleClick = () => {
    const data = {
      title,
      description,
      company,
      startDate,
      endDate,
      status,
    };

    console.log(data);
    resetForm();
  };

  return (
    <div className=" p-10">
      <div className="h-12"></div>
      <div className="bg-gray-100 rounded-lg">
        <div className="h-12 border-b flex items-center border-gray-300">
          <span className="uppercase text-md font-bold text-gray-500 p-6">
            Create New Survey
          </span>
        </div>
        <div className="p-6 flex flex-col gap-8">
          <div className="flex flex-row gap-12">
            <div className="w-1/3">
              <div className="text-gray-500 font-semibold">Title</div>
              <div className="text-gray-400">Enter a discriptive title</div>
            </div>
            <div className="w-full">
              <input
                type="text"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className="h-10 w-full rounded-md border-gray-300 border focus: outline-none px-4"
              />
            </div>
          </div>
          <div className="flex flex-row gap-12">
            <div className="w-1/3">
              <div className="text-gray-500 font-semibold">Description</div>
              <div className="text-gray-400">
                Provide a summary of the survey
              </div>
            </div>
            <div className="w-full">
              <textarea
                className="h-24 w-full rounded-md border-gray-300 border focus: outline-none p-4"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row gap-12">
            <div className=" w-1/3">
              <div className="text-gray-500 font-semibold">Company</div>
              <div className="text-gray-400">
                Select the name of the company
              </div>
            </div>
            <div className="w-full">
              <select
                value={company}
                onChange={(e) => setcompany(e.target.value)}
                className="h-10 w-full rounded-md border-gray-300 border focus: outline-none px-4"
              >
                <option value="abc">abc</option>
                <option value="def">def</option>
                <option value="hij">hij</option>
                <option value="klm">klm</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-12">
            <div className=" w-1/3">
              <div className="text-gray-500 font-semibold">Dates</div>
              <div className="text-gray-400">
                Select the dates for the survey
              </div>
            </div>
            <div className="w-full flex flex-row gap-8">
              <div className="flex flex-col gap-1 min-w-max">
                <div className="text-gray-500 font-semibold">Start Date</div>
                <DateInput
                  className="h-11  bg-white px-4 flex flex-row items-center justify-between w-48 rounded-md border-gray-300 border focus: outline-none"
                  onChange={setStartDate}
                  selected={startDate}
                />
              </div>
              <div className="flex flex-col gap-1 min-w-max">
                <div className="text-gray-500 font-semibold">End Date</div>
                <DateInput
                  className="h-11  bg-white px-4 flex flex-row items-center justify-between w-48 rounded-md border-gray-300 border focus: outline-none"
                  onChange={setEndDate}
                  selected={endDate}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-12">
            <div className="w-1/3">
              <div className="text-gray-500 font-semibold">Status</div>
              <div className="text-gray-400">
                Specify the appropriate status
              </div>
            </div>
            <div
              className="w-full flex flex-row gap-4"
              onChange={(e) => {
                setstatus(e.target.value);
                console.log(e.target.value);
              }}
            >
              <div className="">
                <input type="radio" value="Draft" name="status" id="draft" />
                <label
                  htmlFor="draft"
                  className="text-gray-500 font-semibold select-none ml-1"
                >
                  Draft
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="status"
                  value="Publish"
                  id="publish"
                />
                <label
                  htmlFor="publish"
                  className="text-gray-500 font-semibold select-none ml-1"
                >
                  Publish
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-12 ">
            <div className="w-1/3"></div>
            <Button className="" onClick={handleClick}>
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
