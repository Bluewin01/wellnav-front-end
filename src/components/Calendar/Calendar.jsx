import React from "react";
import "./Calendar.css";

const Calendar = () => {
  const daysOfWeek = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // 0 (Sun) to 6 (Sat)
  const currentMonth = currentDate.toLocaleString("id-ID", { month: "long" }); // Full month name in Indonesian
  const currentDateNumber = currentDate.getDate();

  const getDatesOfWeek = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(currentDateNumber - currentDay + i);
      dates.push(date.getDate());
    }
    return dates;
  };

  const datesOfWeek = getDatesOfWeek();

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="month">{currentMonth}</div>
        <div className="week">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className={`day ${index === currentDay ? "current" : ""}`}
            >
              <div className="day-name">{day}</div>
              <div className="day-number">{datesOfWeek[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
