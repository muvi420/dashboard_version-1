import React, {useState} from 'react';
import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
import './DatePickerComponent.scss';

const DatePickerComponent = (props) => {

  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => {
        setStartDate(date);
        props.callbackFunc(date);
      }}
      // locale="pt-BR"
      showTimeSelect
      timeFormat="p"
      timeIntervals={5}
      dateFormat="Pp"
      className="date_picker"
    />
  );
}

export default DatePickerComponent;