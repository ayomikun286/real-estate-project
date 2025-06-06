import React from "react";

const LocalLanding = () => {
  return (
    <svg
      width="35"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

    >
      <rect width="55" height="55" fill="url(#pattern0_9_39)" />
      <defs>
        <pattern
          id="pattern0_9_39"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_9_39" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_9_39"
          width="96"
          height="96"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default LocalLanding;
