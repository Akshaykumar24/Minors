import { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../store/git/action";
let h = 0;

const Reed = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [c, setC] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.git);
  const debRef = useRef();

  useEffect(() => {
    console.log(h++);
    let t = setTimeout(() => {
      console.log("Hello");
      query && dispatch(search(query));
    }, 1000);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    setUsers(state.users);
  }, [state]);

  const searchUsers = () => {
    dispatch(search(query));
  };

  // const makeQuery = (e) => {
  //   console.log(e.target.value);
  //   setQuery(e.target.value);
  //   dispatch(search(e.target.value));
  // };
  //const opt = useCallback((e) => debouncer(makeQuery(e)), []);
  return (
    <div>
      <h1>Git Users From REDUX</h1>
      <button onClick={() => setC((c) => c + 1)}>Call</button>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchUsers}>Search</button>
      <div className="flex w-401 flex-wrap">
        {users.map((user) => (
          <div className="p-5" key={user.id}>
            <h3 className="">{user.login}</h3>
            <img className="w-80 h-80" src={user.avatar_url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reed;

// const debouncer = (fn) => {
//   console.log(h++);
//   var debouncing;
//   return function () {
//     if (debouncing) {
//       clearTimeout(debouncing);
//     }
//     debouncing = setTimeout(function () {
//       fn();
//       debouncing = null;
//     }, 1000);
//   };
// };
