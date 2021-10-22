import React, { useState, useEffect } from "react";
import { url } from "./url";
import axios from "axios";
import StudComp, { Studs } from "./StudComp";
import styled from "styled-components";
import ButtonComponent, { Button } from "./ButtonComponent";
import AddStudent from "./AddStudent";

const StudentHome = () => {
  const [all, setAll] = useState();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [del, setDel] = useState(false);
  const [filter, setFilter] = useState({});
  const [pages, setPages] = useState([]);
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    axios
      .get(`${url}/api/students`)
      .then(({ data }) => {
        console.log(data);
        setAll(data);
        return setData(data.student);
      })
      .then(() => {});
  }, [del]);

  useEffect(() => {
    setPages(new Array(all ? all.totalPages : 0).fill(0));
  }, [all]);

  const filterChange = (e) => {
    console.log(filter);
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filterThis = () => {
    console.log(filter);
    let res = "";
    for (let k in filter) {
      console.log(k);
      if (filter[k] !== "") {
        res += `${k}=${filter[k]}&`;
      }
    }
    console.log(url + "/api/students?" + res);
    axios
      .get(`${url}/api/students?${res}`)
      .then(({ data }) => {
        console.log(data);
        setAll(data);
        return setData(data.student);
      })
      .then(setShow((p) => !p));
  };
  const prevPage = () => {
    if (curr == 0) {
      return;
    } else {
      setCurr(curr - 1);
      axios.get(`${url}/api/students?page=${curr - 1}`).then(({ data }) => {
        console.log(data);
        setAll(data);
        return setData(data.student);
      });
    }
  };
  const nextPage = () => {
    if (curr == pages.length - 1) {
      return;
    } else {
      setCurr(curr + 1);
      axios.get(`${url}/api/students?page=${curr + 1}`).then(({ data }) => {
        console.log(data);
        setAll(data);
        return setData(data.student);
      });
    }
  };
  const sortHL = () => {
    let res = "";
    for (let k in filter) {
      console.log(k);
      if (filter[k] !== "") {
        res += `${k}=${filter[k]}&`;
      }
    }
    axios
      .get(`${url}/api/students/sortHL?${res}`)
      .then(({ data }) => {
        console.log(data);
        setAll(data);
        return setData(data.student);
      })
      .then(setShow((p) => !p));
  };

  const sortLH = () => {
    let res = "";
    for (let k in filter) {
      console.log(k);
      if (filter[k] !== "") {
        res += `${k}=${filter[k]}&`;
      }
    }
    axios
      .get(`${url}/api/students/sortLH?${res}`)
      .then(({ data }) => {
        console.log(data);
        setAll(data);
        return setData(data.student);
      })
      .then(setShow((p) => !p));
  };
  return (
    <div>
      <h1>DashBoard</h1>
      <br />
      <br />
      <AddStudent />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Studs>
        <input type="text" name="city" onChange={(e) => filterChange(e)} />
        <input type="text" name="age" onChange={(e) => filterChange(e)} />
        <select name="gender" onChange={(e) => filterChange(e)}>
          <option value="">None</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button onClick={() => filterThis()}>Filter</button>
        <button onClick={sortHL}>Sort Age L-H</button>
        <button onClick={sortLH}>Sort Age H-L</button>
      </Studs>
      <br />
      <br />
      {data.map((i) => (
        <StudComp p={i} key={i._id} setShow={setShow} setDel={setDel} />
      ))}
      <br />
      <br />
      <Button onClick={prevPage}>Prev</Button>
      {pages.map((b, i) => (
        <ButtonComponent
          p={b}
          i={i}
          setAll={setAll}
          setCurr={setCurr}
          curr={curr}
          setData={setData}
        />
      ))}

      <Button onClick={nextPage}>Next</Button>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default StudentHome;

const Filter = styled.div``;
