import "./App.css";
import React from "react"
import ReactPlayer from "react-player"

function App() {


  return (
      <div className="App">
        <MyVideo />
      </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
  );
};

export default App;
