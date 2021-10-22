import axios from "axios";
import React from "react";
import { url } from "./url";
import styled from "styled-components";

const ButtonComponent = ({ p, i, setAll, setCurr, curr, setData }) => {
  console.log(p);
  const changePage = () => {
    setCurr(i + 1);
    axios.get(`${url}/api/students?page=${i + 1}`).then(({ data }) => {
      console.log(data);
      setAll(data);
      return setData(data.student);
    });
  };
  return <Button onClick={changePage}>{i + 1}</Button>;
};

export default ButtonComponent;

export const Button = styled.button`
  color: white;
  font-weight: 500;
  font-size: 18px;
  background-color: #38a8a8;
  margin: 5px;
  padding: 5px;
`;
