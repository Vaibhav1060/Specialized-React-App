import React from "react";
import "./Banner.scss";

export default function Banner({ text, hero }) {
  return (
    <div className={hero}>
      <div className="banner-text">{text}</div>
    </div>
  );
}
