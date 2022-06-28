import React from "react";
import { useState } from "react";

export default function F({ f, onChange }) {
  console.log(f);
  return (
    <>
      <h3>Fahrenheit</h3>
      <input value={f} onChange={onChange}></input>;
    </>
  );
}
