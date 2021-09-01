import React from "react";

export default function CurrentDayDescriptionItem({ name, value, unit }) {
  return (
    <div className="d-flex justify-content-between fw-bold ">
      <p className="mb-0 fw-bolder">{name}</p>
      <p className="mb-0 ">
        {value}
        {unit}
      </p>
    </div>
  );
}
