import React, { PropTypes } from "react";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";
import "./Calendar.css";

import moment from "moment";

const Calendar = props => {
  let currentDate = moment().format("YYYY-MM-DD");

  const onChange = newDate => {
    newDate = moment(newDate, "YYYY-MM-DD").format("YYYY-MM-DD");
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
