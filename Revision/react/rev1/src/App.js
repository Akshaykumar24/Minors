import "./App.css";
import { Route, Switch } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import Comment from "./components/Comment";
import axios from "axios";
import { useEffect, useState } from "react";
import Spread from "./components/Spreadsheet/Spread";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [c, setC] = useState(0);
  useEffect(() => {
    find();
  }, [c]);

  function find() {
    axios
      .get("https://first-server24.herokuapp.com/reddit/1")
      .then(({ data }) => setData(data));
  }
  //postComment();
  return (
    <div className="App-header">
      <Switch>
        <Route exact path="/">
          <Link to="/spread">
            <button>Spread Sheet</button>
          </Link>
          <Comment
            dataIn={data}
            c={c}
            find={find}
            setC={setC}
            setData={setData}
          />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/spread">
          <Spread />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// let data = {
//   id: 1,
//   author: "albert",
//   body: "Whats the status?",
//   timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
//   points: "2",
//   replies: [
//     {
//       id: 3,
//       author: "haren",
//       body: "Wrote the test suites, waiting for approval?",
//       timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
//       points: "3",
//       replies: [
//         {
//           id: 4,
//           author: "albert",
//           body: "Thanks for the update!",
//           timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
//           points: "8",
//         },
//       ],
//     },
//     {
//       id: 2,
//       author: "Nrupul",
//       body: "looking forward for the demo!",
//       timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
//       points: "2",
//     },
//   ],
// };
