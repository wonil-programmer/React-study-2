import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => {
      console.log("bye :(");
    };
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const onClick = () => setValue((prev) => prev + 1);
  // const onChange = (event) => {
  //   setKeyword(event.target.value);
  // };
  // console.log("i run all the time");
  // useEffect(() => {
  //   console.log("I run only once....");
  // }, []);
  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 5) {
  //     console.log("I run when 'keyword' changes", keyword);
  //   }
  // }, [keyword]);
  // useEffect(() => {
  //   console.log("I run when 'counter' changes");
  // }, [counter]);
  // useEffect(() => {
  //   console.log("I run when 'keyword & counter' changes");
  // }, [keyword, counter]);

  // return (
  //   <div>
  //     <input
  //       value={keyword}
  //       onChange={onChange}
  //       type="text"
  //       placeholder="Search here..."
  //     ></input>
  //     <h1>{counter}</h1>
  //     <button onClick={onClick}>click me</button>
  //   </div>
  // );
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
