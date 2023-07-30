import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import { useState } from "react";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./components/FeedbackList";


function App() {

  const [feedback,setFeedback]=useState(FeedbackData);

  const deleteFeedback=(id)=>{
    setFeedback(feedback.filter((item)=>item.id!==id))
  }

  return (
    <>
    <Header text='Feedback-App'/>
    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    <div className="container">
      <h1>My App</h1>
      <p>hi this is feedback-app</p>
    </div>
    
    </>
  );
}
export default App;
