import React, { useEffect, useState } from "react";
import moment from "moment";

interface CalendarWeekDatesProps {
  currentWeek: Date;
  selectedDate: Date;
  updateSelectedDate: (date: Date) => void;
}

const CalendarWeekDates: React.FunctionComponent<CalendarWeekDatesProps> = ({
  currentWeek,
  selectedDate,
  updateSelectedDate
}) => {
  const [dateRows, setDateRows] = useState<any[]>([]);

  useEffect(() => {
    const startDate = moment(currentWeek).startOf("week");
    const endDate = moment(currentWeek).endOf("week");
    const dateFormat: string = "DD";
    const rows: any[] = [];
    let days: any[] = [];
    let day: any = startDate;
    let formattedDate: string = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = moment(day).format(dateFormat);
        const cloneDay = day.toDate();
        days.push(
          <div
            className={`col cell ${
              moment(day).isSame(new Date(), "day")
                ? "today"
                : moment(day).isSame(selectedDate, "day")
                ? "selected"
                : ""
            }`}
            key={day.toString()}
            onClick={() => {
              updateSelectedDate(cloneDay);
            }}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = moment(day).add(1, "day");
      }

      rows.push(
        <div className="row" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }

    setDateRows(rows);
  }, [currentWeek, selectedDate, updateSelectedDate]);

  return <div className="body">{dateRows}</div>;
};

CalendarWeekDates.defaultProps = {
  currentWeek: new Date(),
  selectedDate: new Date(),
  updateSelectedDate: () => {}
};

export default CalendarWeekDates;
