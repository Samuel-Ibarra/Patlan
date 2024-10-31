// arrow.js
import React from 'react';

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#009fe3"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" fill="#009fe3" />
    <path d="M15 8l1.5-1.5 3 3L18 11l-3-3z" fill="#009fe3" />
    <path
      d="M12.7 9.7l-1.4 1.4 2.5 2.5-1.4 1.4-2.5-2.5-1.6 1.6-.7-.7 1.6-1.6-2.5-2.5 1.4-1.4 2.5 2.5 1.4-1.4z"
      fill="#009fe3"
    />
  </svg>
);

export default ArrowIcon;
