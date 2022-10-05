import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarWeekDays from "./CalendarWeekDays";
import CalendarWeekDates from "./CalendarWeekDates";

const Calendar = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [customDayFormat, setCustomDayFormat] = useState<string>("ddd");

  const handleChangeDayFormart = (e: React.FormEvent<HTMLSelectElement>) => {
    const option = e.currentTarget.value;

    switch (option) {
      case "Su-Sa":
        setCustomDayFormat("dd");
        break;
      case "Sun-Sat":
        setCustomDayFormat("ddd");
        break;
      case "Sunday-Saturday":
        setCustomDayFormat("dddd");
        break;
      default:
        setCustomDayFormat("ddd");
        break;
    }
  };

  return (
    <div className="calendar">
      <div className="top">
        <p className="title">Calendar</p>
        <div className="custom-day">
          <select
            name="customDay"
            className="mt-1 ml-10 "
            onChange={handleChangeDayFormart}
            defaultValue="Sun-Sat"
          >
            <option value="Su-Sa">Su - Sa</option>
            <option value="Sun-Sat">Sun - Sat</option>
            <option value="Sunday-Saturday">Sunday - Saturday</option>
          </select>
        </div>
      </div>

      <CalendarHeader
        currentWeek={currentWeek}
        updateCurrentWeek={setCurrentWeek}
        updateSelectedDate={setSelectedDate}
      />

      <CalendarWeekDays
        currentWeek={currentWeek}
        customDayFormat={customDayFormat}
      />

      <CalendarWeekDates
        currentWeek={currentWeek}
        selectedDate={selectedDate}
        updateSelectedDate={setSelectedDate}
      />
    </div>
  );
};

export default Calendar;
