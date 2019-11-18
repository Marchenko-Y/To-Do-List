import React from "react";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";
import "./Calendar.css";
import format from "date-fns/format";

const Calendar = props => {
  let currentDate = format(new Date(), "yyyy-MM-dd");

  const onChange = newDate => {
    newDate = format(new Date(newDate), "yyyy-MM-dd");
    props.updateDate(newDate);
  };

  return (
    <div className="calendar-block">
      <DatePickerInput
        onChange={onChange}
        defaultValue={props.newTaskDate}
        className="my-custom-datepicker-component"
        displayFormat="DD/MM/YYYY"
        minDate={currentDate}
      />
    </div>
  );
};
export default Calendar;
