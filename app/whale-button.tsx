"use client";

import { useState } from "react";

export function WhaleButton() {
  const buttonConfig = {
    label: "Click",
    class: "btn",
  };
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <button className={buttonConfig.class} onClick={handleClick}>
      {buttonConfig.label} - Counter {count}
    </button>
  );
}
