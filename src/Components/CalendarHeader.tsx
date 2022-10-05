import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import moment from "moment";

interface CalendarHeaderProps {
  currentWeek: Date;
  updateCurrentWeek: (action: Date) => void;
  updateSelectedDate: (date: Date) => void;
}

const CalendarHeader: React.FunctionComponent<CalendarHeaderProps> = ({
  currentWeek,
  updateCurrentWeek,
  updateSelectedDate
}) => {
  const dateFormat = "MMM yyyy";

  const goToCurrentDay = () => {
    const today = new Date();
    updateSelectedDate(today);
    updateCurrentWeek(moment(today).toDate());
  };

  const handleChangeWeek = (navigate: string) => {
    if (navigate === "back") {
      updateCurrentWeek(moment(currentWeek).subtract(1, "week").toDate());
    }
    if (navigate === "next") {
      updateCurrentWeek(moment(currentWeek).add(1, "week").toDate());
    }
  };

  return (
    <div className="header row">
      <div className="col col-start">
        <span>{moment(currentWeek).format(dateFormat)}</span>
      </div>
      <div className="col col-end">
        <div className="icon" onClick={() => handleChangeWeek("back")}>
          <NavigateBeforeIcon />
        </div>
        <button type="button" className="today" onClick={goToCurrentDay}>
          Today
        </button>
        <div className="icon" onClick={() => handleChangeWeek("next")}>
          <NavigateNextIcon />
        </div>
      </div>
    </div>
  );
};

CalendarHeader.defaultProps = {
  currentWeek: new Date(),
  updateCurrentWeek: () => {},
  updateSelectedDate: () => {}
};

export default CalendarHeader;
