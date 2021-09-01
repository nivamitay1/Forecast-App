import React, { useState } from "react";
import styles from "./Form.module.css";
import axios from "axios";

export default function Form({ setForecast, setIsError }) {
  const [location, setLocation] = useState("");

  const getData = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${
          process.env.REACT_APP_ONE_API_KEY
        }&q=${location.toLocaleLowerCase()}&days=5&aqi=no&alerts=no`
      );
      const data = await res.data;
      setForecast(data);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className={styles.box}>
      <form onSubmit={getData}>
        <input
          type="text"
          className={styles.input}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search for location"
          required
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
}
