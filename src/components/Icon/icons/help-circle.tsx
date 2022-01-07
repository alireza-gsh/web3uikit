import React from "react";

const helpCircleIcon = (
  fill: string,
  size: number,
  style?: React.CSSProperties,
) => (
  <svg
    aria-hidden="true"
    data-testid="test-icon"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <title>help circle icon</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.6092C7.36589 3.6092 3.6092 7.36589 3.6092 12C3.6092 16.6341 7.36589 20.3908 12 20.3908C16.6341 20.3908 20.3908 16.6341 20.3908 12C20.3908 7.36589 16.6341 3.6092 12 3.6092ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2568 8.23091C11.802 8.1529 11.3342 8.23837 10.9364 8.47218C10.5385 8.70599 10.2363 9.07307 10.0831 9.50838C9.93568 9.92756 9.47632 10.1478 9.05713 10.0004C8.63795 9.85292 8.41767 9.39356 8.56513 8.97438C8.84437 8.18057 9.39554 7.51121 10.121 7.08484C10.8465 6.65847 11.6995 6.50262 12.5288 6.64488C13.3582 6.78714 14.1105 7.21833 14.6524 7.86209C15.1942 8.5057 15.4908 9.32026 15.4897 10.1615C15.4893 11.5079 14.4902 12.4073 13.7521 12.8993C13.3584 13.1618 12.9706 13.3551 12.6842 13.4824C12.5399 13.5465 12.4186 13.5951 12.3314 13.6283C12.2877 13.645 12.2525 13.6578 12.227 13.6669L12.1961 13.6777L12.1865 13.681L12.1832 13.6821L12.1819 13.6825C12.1819 13.6825 12.1809 13.6828 11.9264 12.9195L12.1809 13.6828C11.7593 13.8234 11.3036 13.5955 11.1631 13.174C11.0228 12.7529 11.2499 12.2979 11.6704 12.1567L11.6716 12.1564L11.6879 12.1507C11.7028 12.1454 11.7268 12.1367 11.7585 12.1245C11.8222 12.1003 11.9164 12.0627 12.0307 12.0119C12.2616 11.9092 12.5634 11.7578 12.8594 11.5604C13.5005 11.133 13.8805 10.6533 13.8805 10.1609L13.8805 10.1597C13.8811 9.69826 13.7185 9.25144 13.4213 8.89841C13.1241 8.54539 12.7116 8.30892 12.2568 8.23091Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.1954 16.5977C11.1954 16.1533 11.5556 15.7931 12 15.7931H12.0092C12.4536 15.7931 12.8138 16.1533 12.8138 16.5977C12.8138 17.0421 12.4536 17.4023 12.0092 17.4023H12C11.5556 17.4023 11.1954 17.0421 11.1954 16.5977Z"
      fill={fill}
    />
  </svg>
);
export default helpCircleIcon;
