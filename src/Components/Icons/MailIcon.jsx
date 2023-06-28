import React from "react";

const MailIcon = (props) => {
  const { height = "16px", width = "16px" } = props;
  return (
    <span {...props}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 16 16`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="4" width="15" height="13" fill="black" />
        <path
          d="M2 3L9.5 10.5L16.5 3.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default MailIcon;
