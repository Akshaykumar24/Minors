import axios from "axios";
import React, { useState } from "react";
import { url } from "./url";
import { Studs } from "./StudComp";
import { Button } from "./ButtonComponent";

const AddStudent = () => {
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [city, setCity] = useState();
  const [age, setAge] = useState();
  const [ad, setAd] = useState(false);

  const add = () => {
    axios
      .post(`${url}/api/students`, {
        name,
        age,
        city,
        gender,
      })
      .then((res) => console.log(res));
  };

  return (
    <div>
      <Button onClick={() => setAd((p) => !p)}>
        {ad ? "Close" : "Add Student"}
      </Button>
      {ad && (
        <Studs>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Student Name"
          />
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />
          <input
            type="text"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Gender"
          />
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
          <Button onClick={add}>Add</Button>
          <Button onClick={() => setAd(false)}>Close</Button>
        </Studs>
      )}
    </div>
  );
};

export default AddStudent;
