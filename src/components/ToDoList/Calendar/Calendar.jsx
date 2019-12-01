import React from "react";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";
import "./Calendar.css";
import format from "date-fns/format";

const renderDataField = ({ input, currentDate, meta: { touched, error } }) => {
  let today = format(new Date(), "yyyy-MM-dd");
  return (
    <div className="calendar-block">
      <DatePickerInput
        {...input}
        onChange={(event, value) => input.onChange(value)}
        defaultValue={currentDate ? currentDate : today}
        className="my-custom-datepicker-component"
        displayFormat="DD/MM/YYYY"
        minDate={today}
        closeOnClickOutside="true"
      />
    </div>
  );
};
export default renderDataField;
