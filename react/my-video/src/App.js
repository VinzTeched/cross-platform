import "./App.css";
import React from "react"
import ReactPlayer from "react-player"

function App() {

  const videoUrl = 'https://www.facebook.com/facebook/videos/10153231379946729/';

  return (
      <div className="App">
        <MyVideo />
        <ReactPlayer url = {videoUrl} playing={false} volume={0.5} />
      </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
  );
};

export default App;
