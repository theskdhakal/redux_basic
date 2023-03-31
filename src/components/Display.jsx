import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const { dtList } = useSelector((state) => state.dataList);
  return (
    <div>
      <ul></ul>
    </div>
  );
};
