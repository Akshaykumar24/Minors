import { useContext } from "react";
import { Route, Switch } from "react-router";
import First from "./components/First";
import Reed from "./components/Reed";
import Timer from "./components/Timer";
import { Theme } from "./context/themeContext";

function App() {
  const { th, toggle } = useContext(Theme);

  return (
    <>
      <button onClick={() => toggle(th)}>Change theme</button>
      <Switch>
        <Route exact path="/">
          <div className="container text-red-500 text-3xl font-medium bg-gray-300">
            Hello World
          </div>
          <First />
        </Route>
        <Route path="/reed">
          <Reed />
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
