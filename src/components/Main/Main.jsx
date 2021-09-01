import React from "react";
import { useState } from "react";
import BackBtn from "./BackBtn/BackBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Forecast from "./Forecast/Forecast";
import Form from "./Form/Form";
import styles from "./Main.module.css";
export default function Main() {
  const [forecast, setForecast] = useState(null);
  const [isError, setIsError] = useState(false);

  return (
    <>
      <ErrorMessage isError={isError} setIsError={setIsError} />
      <main className={styles.main}>
        {forecast ? (
          <>
            <BackBtn setForcast={setForecast} />
            <Forecast forecast={forecast} />
          </>
        ) : (
          <Form setForecast={setForecast} setIsError={setIsError} />
        )}
      </main>
    </>
  );
}
