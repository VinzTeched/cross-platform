import "./App.css";
import CurrentDay from "./CurrentDay";
import CurrentMessage from "./CurrentMessage";
import CurrentProp from "./CurrentProp";
import Logic from "./Logic";
import LogInOutButton from "./LogInOutButton";

function App() {


  return (
      <div className="App">
       <CurrentMessage />
       <CurrentProp day="7" />
       <CurrentDay />
       <Logic />  
       <LogInOutButton isLoggedIn={false} />
      </div>
  );
};

export default App;
