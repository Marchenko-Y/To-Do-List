import React from "react";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";

const Calendar = props => {
  debugger;
  //   const date = new Date();
  const onChange = newDate => {
    props.updateDate(newDate);
  };

  return (
    <div>
      <DatePickerInput
        onChange={onChange}
        defaultValue={props.newTaskDate}
        className="my-custom-datepicker-component"
        displayFormat="DD/MM/YYYY"
      />
    </div>
  );
};
export default Calendar;
