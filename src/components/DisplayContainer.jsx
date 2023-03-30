import React from "react";
import { useSelector } from "react-redux";
import { Display } from "./Display";

export const DisplayContainer = () => {
  const { dtList } = useSelector((state) => state.dataList);
  return (
    <div>
      <h3>Display goes here</h3>

      <hr />
      <Display />
    </div>
  );
};
