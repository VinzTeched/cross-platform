import './App.css';
import FeedbackForm from './FeedbackForm';
import Form from './Form';
import FormCtrl from './FormCtrl';
import Forme from './Forme';
import FormFile from './FormFile';
import Invitation from './Formik';
import FormikSignupForm from './FormikSignupForm';
import RegistrationForm from './RegistrationForm';
import { UserProvider } from './UserContext';


function App() {

  return (
    <div className="App">
      <FormikSignupForm />
    </div>
  );
}

function Root() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  )
}

export default App;
