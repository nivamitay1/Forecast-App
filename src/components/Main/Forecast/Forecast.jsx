import React from "react";
import styles from "./Forecast.module.css";
import { Container, Row, Col } from "react-bootstrap";
import CurrentDay from "./CurrentDay/CurrentDay";
import CurrentDayDescription from "./CurrentDayDescription/CurrentDayDescription";
import UpcomingDaysForecast from "./UpcomingDaysForecast/UpcomingDaysForecast";

export default function Forecast({ forecast }) {
  return (
    <Container className={styles.forecastBox} fluid="true">
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={5}>
          <div className={styles.card}>
            <CurrentDay
              localTime={forecast.location.localtime}
              location={forecast.location.name}
              temperature_c={forecast.current.temp_c}
              temperature_f={forecast.current.temp_f}
              weatherIcon={forecast.current.condition.icon}
              weatherDescription={forecast.current.condition.text}
            />
          </div>
        </Col>
        <Col
          xs={12}
          md={7}
          className="d-flex flex-column justify-content-between"
        >
          <CurrentDayDescription currentForecast={forecast.current} />
          <UpcomingDaysForecast days={forecast.forecast.forecastday} />
        </Col>
      </Row>
    </Container>
  );
}
