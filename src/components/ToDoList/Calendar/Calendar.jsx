import React, { PropTypes } from "react";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";

const Calendar = props => {
  let currentDate = new Date();
  currentDate = currentDate.toISOString().substring(0, 10);

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
        minDate={currentDate}
      />
    </div>
  );
};
export default Calendar;
