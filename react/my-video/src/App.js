import "./App.css";
import React from "react"
import ReactPlayer from "react-player"

function App() {

  const videoUrl = 'https://www.youtube.com/watch?v=ysz5S6PUM-U';

  return (
      <div className="App">
        <MyVideo />
      </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url={videoUrl} playing={false} volume={0.5} />
  );
};

export default App;
