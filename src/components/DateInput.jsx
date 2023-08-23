import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CalenderIcon } from "../assets/images/calender-svgrepo-com.svg";

export default function DateInput({ onChange, selected, className }) {
  return (
    <div className={className}>
      <ReactDatePicker
        className="focus: outline-none p-0 w-full "
        placeholderText="dd/mm/yyyy"
        dateFormat="dd/MM/yyyy"
        selected={selected}
        onChange={(date) => {
          onChange(date);
        }}
      />
      <CalenderIcon className="h-6 w-6" />
    </div>
  );
}
