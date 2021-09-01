import React from "react";
import ForecastDay from "./ForecastDay/ForecastDay";
import styles from "./UpcomingDaysForecast.module.css";

export default function UpcomingDaysForecast({ days }) {
  return (
    <ul className={`${styles.weekList} d-flex justify-content-between px-2`}>
      {days.map((day) => {
        return <ForecastDay {...day} key={day.date} />;
      })}
    </ul>
  );
}
