import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function CalendarApp() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <p className="d-flex justify-content-center">I'PRO IIUM</p>
      <div className="d-flex justify-content-center">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
export default CalendarApp;
