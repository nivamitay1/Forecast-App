import React from "react";
import CurrentDayDescriptionItem from "./CurrentDayDescriptionItem/CurrentDayDescriptionItem";
import styles from "./CurrentDayDescription.module.css";

export default function CurrentDayDescription({ currentForecast }) {
  return (
    <div className="mt-4 mt-md-2">
      <div className="d-flex flex-column mb-2" id={styles.wrapper}>
        <CurrentDayDescriptionItem
          name={"Feels like"}
          value={`${currentForecast.feelslike_c} °C/${currentForecast.feelslike_f}`}
          unit={"°F"}
        />
        <CurrentDayDescriptionItem
          name={"Humidity"}
          value={currentForecast.humidity}
          unit={"%"}
        />
        <CurrentDayDescriptionItem
          name={"Wind speed"}
          value={`${currentForecast.wind_kph} kph/${currentForecast.wind_mph}`}
          unit={"mph"}
        />
        <CurrentDayDescriptionItem
          name={"Cloud cover"}
          value={currentForecast.cloud}
          unit={"%"}
        />
        <CurrentDayDescriptionItem
          name={"Wind degree"}
          value={currentForecast.wind_degree}
          unit={"°"}
        />
        <CurrentDayDescriptionItem
          name={"Air pressure"}
          value={`${currentForecast.pressure_mb} mb/${currentForecast.pressure_in}`}
          unit={"in"}
        />
      </div>
    </div>
  );
}
