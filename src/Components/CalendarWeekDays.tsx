import React, { useEffect, useState } from "react";
import moment from "moment";

interface CalendarWeekDaysProps {
  currentWeek: Date;
  customDayFormat: string;
}

const CalendarWeekDays: React.FunctionComponent<CalendarWeekDaysProps> = ({
  currentWeek,
  customDayFormat
}) => {
  const [calendarDays, setCalendarDays] = useState<any[]>([]);

  useEffect(() => {
    const startDate = moment(currentWeek).startOf("week");
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {moment(startDate).add(i, "day").format(customDayFormat)}
        </div>
      );
    }
    setCalendarDays(days);
  }, [customDayFormat, currentWeek]);

  return <div className="days row">{calendarDays}</div>;
};

CalendarWeekDays.defaultProps = {
  currentWeek: new Date(),
  customDayFormat: ""
};

export default CalendarWeekDays;
