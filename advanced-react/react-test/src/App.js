import './App.css';
import FeedbackForm from "./FeedbackForm";

const TestBegin = () => {
  return(
      <a href="https://littlelemon.com" className="App-link">
        little lemon restaurant
      </a>
  )
}

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
