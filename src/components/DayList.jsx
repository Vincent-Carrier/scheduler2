import React from "react";
import classNames from "classnames";
// import "components/DayList.scss";
import DayListItem from "components/DayListItem";

export default function DayList({ days, day, setDay }) {
  // const dayClass = classNames('day-list', {
  // });

  return (
    <ul>
      {days &&
        days.map(_day => (
          <DayListItem
            key={_day.name}
            name={_day.name}
            spots={_day.spots}
            selected={_day.name === day}
            setDay={setDay}
          />
        ))}
    </ul>
  );
}
