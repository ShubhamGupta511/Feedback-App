import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid'

function App() {

  const [feedback,setFeedback]=useState(FeedbackData);

  const deleteFeedback=(id)=>{
    setFeedback(feedback.filter((item)=>item.id!==id))
  }

  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4();
    setFeedback([newFeedback,...feedback]);
  }

  return (
    <div className="container">
    <Header text='Feedback-App'/>
    
    <FeedbackForm  handleAdd={addFeedback}/>
    <FeedbackStats feedback={feedback}/>
    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
   
    <div className="container">
      <h1>My App</h1>
      <p>hi this is feedback-app</p>
    </div>
    
    </div>
  );
}
export default App;
