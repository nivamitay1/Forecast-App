import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function ErrorAlert({ isError, setIsError }) {
  if (isError) {
    setTimeout(() => {
      setIsError(false);
    }, 3000);

    return (
      <ToastContainer className="p-3" position={"top-center"}>
        <Toast show={isError} onClose={() => setIsError(false)} bg={"danger"}>
          <Toast.Header>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body style={{ color: "white" }}>
            We have no Forecast for this location{" "}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    );
  }
  return null;
}
