import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
export let dateBirth;

const CalendarPicker = () => {

  const [selectedDay, setSelectedDay] = useState();

  dateBirth = selectedDay;

  const renderCustomInput = ({ ref }) => (
    <input type="text" className="form-control text-center my-2"
      placeholder="تاریخ تولد" ref={ref}
      value={selectedDay ? `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}` : null} />
  )

  return (
    <DatePicker
      value={selectedDay}
      onChange={setSelectedDay}
      inputPlaceholder="Select a day"
      shouldHighlightWeekends
      locale="fa"
      renderInput={renderCustomInput}
      wrapperClassName="d-block"
      calendarPopperPosition="bottom"
    />
  );
};

export default CalendarPicker;