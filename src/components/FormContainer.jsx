import React from "react";
import { useSelector } from "react-redux";
import { Form } from "./Form";

export const FormContainer = () => {
  const { formDt } = useSelector((state) => state.dataList);
  return (
    <div>
      <h3>Form container</h3>

      <p>you are typing:{formDt}</p>
      <hr />
      <Form />
    </div>
  );
};
