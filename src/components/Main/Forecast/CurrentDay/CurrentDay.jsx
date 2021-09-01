import React, { useState, useEffect } from "react";
import styles from "./CurrentDay.module.css";
import locationIcon from "../../../../assets/location-pin.png";
import axios from "axios";

export default function CurrentDay({
  localTime,
  location,
  temperature_c,
  temperature_f,
  weatherIcon,
  weatherDescription,
}) {
  const [locationImage, setLocationImage] = useState(null);

  useEffect(() => {
    async function fetchLocationImage() {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&client_id=${process.env.REACT_APP_TWO_API_KEY}&query=${location}`
      );
      const data = await res.data;
      if (data.total > 0) {
        setLocationImage(data.results[0].urls.full);
      }
    }
    fetchLocationImage();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div
        className={styles.img}
        style={
          locationImage
            ? {
                backgroundImage: `url(${locationImage})`,
              }
            : null
        }
      ></div>
      <div className={styles.gradient}></div>
      <div
        className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}
      >
        <div>
          <h2 className=" mb-1">Today</h2>
          <p className="mb-0">{new Date(localTime).toLocaleTimeString()}</p>
          <p className="d-flex align-items-baseline  mb-1">
            <img
              width="10"
              height="15"
              src={locationIcon}
              className="mr-1"
              alt="location pin icon"
            />
            <span> {location}</span>
          </p>
        </div>
        <div>
          <img width="45" src={weatherIcon} alt={weatherDescription} />
          <h2 className=" mb-1">
            <span>{temperature_c}</span>°C/<span>{temperature_f}</span>°F
          </h2>
          <h5>{weatherDescription}</h5>
        </div>
      </div>
    </div>
  );
}
