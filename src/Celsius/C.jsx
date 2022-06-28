import React from "react";

export default function C({ c, onChange }) {
  return (
    <>
      <h3>Celsius</h3>
      <input value={c} onChange={onChange}></input>
    </>
  );
}
