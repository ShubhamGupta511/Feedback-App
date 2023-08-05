import Header from "./components/Header";

import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";


//Context-Api : It provide a way to pass the data through the component tree without having to pass
//props manully at every level


function App() {

  return (
    <FeedbackProvider>
    <Router>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header text="Feedback-App" />
                <FeedbackForm />
                <FeedbackStats/>
                <FeedbackList />
              </>
            }
          />

          <Route path="/about" element={<AboutPage />} />
          
        </Routes>
      </div>
      <AboutIconLink />
    </Router>
    </FeedbackProvider>
  );
}
export default App;
