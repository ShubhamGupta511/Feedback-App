import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState,useEffect } from "react";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackForm() {

  const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext);

  useEffect(()=>{
  if(feedbackEdit.edit===true){
    SetBtnDisabled(false);
    setText(feedbackEdit.item.text);
    setRating(feedbackEdit.item.rating)
  }
  },[feedbackEdit])

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, SetBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      SetBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text Must be at least characters");
      SetBtnDisabled(true);
    } else {
      setMessage(null);
      SetBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = { text, rating };
      
      if(feedbackEdit.edit===true){
        updateFeedback(feedbackEdit.item.id,newFeedback);
      }
      else{
        addFeedback(newFeedback);
      }
    }
    
    setText('');
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h1>Hi,How would you rate your service with us?</h1>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />

        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a Review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled} version="secondary">
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
