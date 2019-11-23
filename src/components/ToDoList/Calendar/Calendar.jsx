import React from "react";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";
import "./Calendar.css";
import format from "date-fns/format";

const Calendar = props => {
  let today = format(new Date(), "yyyy-MM-dd");

  const onChange = newDate => {
    newDate = format(new Date(newDate), "yyyy-MM-dd");
    props.updateDate(newDate);
  };

  return (
    <div className="calendar-block">
      <DatePickerInput
        onChange={onChange}
        defaultValue={props.currentDate ? props.currentDate : today}
        className="my-custom-datepicker-component"
        displayFormat="DD/MM/YYYY"
        minDate={today}
      />
    </div>
  );
};
export default Calendar;
