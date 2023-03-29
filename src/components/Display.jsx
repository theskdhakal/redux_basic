import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const { dtList } = useSelector((state) => state.nameList);
  return (
    <div>
      <ul>
        {dtList.map((item) => (
          <li>{item}</li>
        ))}
        <li>data 1</li>
        <li>data 2</li>
        <li>data 3</li>
      </ul>
    </div>
  );
};
