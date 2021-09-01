import React from "react";
import styles from "./ForecastDay.module.css";

export default function ForecastDay({ date, day }) {
  return (
    <li
      className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}
    >
      <img
        className="mb-2"
        width="30"
        src={day.condition.icon}
        alt={day.condition.text}
      />
      <span className="mb-2">
        {new Date(date).toLocaleDateString("en-US", { weekday: "long" })}
      </span>
      <span className="fw-bold">{day.avgtemp_c}°C</span>
    </li>
  );
}
