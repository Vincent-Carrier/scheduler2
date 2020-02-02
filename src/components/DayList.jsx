import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList({ days, day, setDay }) {
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
