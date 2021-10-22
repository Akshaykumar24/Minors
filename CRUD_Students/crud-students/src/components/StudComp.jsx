import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { url } from "./url";

const StudComp = ({ p, setDel, setShow }) => {
  const [name, setName] = useState(p.name);
  const [gender, setGender] = useState(p.gender);
  const [city, setCity] = useState(p.city);
  const [age, setAge] = useState(p.age);

  const [main, setmain] = useState(p);

  const [ed, setEd] = useState(false);

  const edit = () => {
    const payload = {
      name,
      gender,
      city,
      age,
    };
    axios
      .patch(`${url}/api/students/${p._id}`, payload)
      .then(({ data }) => {
        console.log(data);
        setmain(data.student);
      })
      .then(setShow((p) => !p))
      .then(setEd(false));
  };
  const handleDelete = (e) => {
    axios
      .delete(`${url}/api/students/${p._id}`)
      .then((res) => console.log(res))
      .then(setDel((p) => !p))
      .then(setEd(false));
  };
  return (
    <>
      <Studs>
        <h2>{main.name}</h2>
        <p>{main.age}</p>
        <p>{main.gender}</p>
        <p>{main.city}</p>
        <button onClick={() => setEd((p) => !p)}>Edit</button>
        <button onClick={() => handleDelete()}>Delete</button>
      </Studs>
      {ed && (
        <Studs>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={edit}>Save</button>
          <button onClick={() => setEd(false)}>Close</button>
        </Studs>
      )}
    </>
  );
};

export default StudComp;

export const Studs = styled.div`
  width: 80%;
  border: 1px solid black;
  margin: 0 auto;
  text-align: left;
  justify-content: space-evenly;
  display: flex;
  padding: 7px 15px;
  > :first-child {
    width: 30%;
    //border: 1px solid black;
  }
  > :nth-child(2) {
    text-align: center;
    width: 10%;
  }
  > :nth-child(3) {
    width: 15%;
  }
  > :nth-child(4) {
    width: 15%;
  }
  > :nth-child(5) {
    width: 15%;
  }
  > :nth-child(6) {
    width: 15%;
  }
  > button {
    color: white;
    font-weight: 700;
    font-size: 18px;
    background-color: #38a8a8;
  }
  > input {
    font-size: 18px;
    height: 24px;
    padding: 5px;
  }
`;

const Modal = styled.div`
  background-color: #ffe;

  > div {
    width: 400px;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2px;
    > input {
      font-size: 18px;
    }
  }
`;
