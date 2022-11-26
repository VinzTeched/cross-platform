import "./App.css";

function App() {

  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;

  if(day.toLowerCase() === "monday") {
    dayMessage = `Happy ${day}`
  } else if(day.toLocaleString === "tuesday") {
    dayMessage = `${day}, four days to go`;
  } else if(day.toLocaleString() === "wednesday") {
    dayMessage = `${day}, half way there`;
  } else if(day.toLocaleString() === "thursday") {
    dayMessage = `${day}, start planning the weekend`;
  } else if(day.toLocaleString() === "friday") {
    dayMessage = `Woo - hoo, the weekend is coming!`;
  } else {
    dayMessage = "Stay calm and keep having fun";
  }

  return (
      <div className="App">
        <h1>
          {dayMessage}
        </h1>
        {morning ? <h2>Have you had breakfast yet?</h2>: ""}
      </div>
  );
};

export default App;
