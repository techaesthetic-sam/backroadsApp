import React from "react";

export default function Title({ title, subTitle }) {
  return (
    <div>
      <div class="section-title">
        <h2>
          {title} <span>{subTitle}</span>
        </h2>
      </div>
    </div>
  );
}
