import { createContext, useState ,useEffect} from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const[isLoading,setIsLoading]=useState(true);
  const [feedback, setFeedback] = useState([]);

  useEffect(()=>{
    fetchFeedback();
  },[])


  //Fetch Feedback
  const fetchFeedback=async()=>{
    const response=await fetch(`/feedback?_sort=id&_order=desc`)

    const data=await response.json();
    setFeedback(data);
    setIsLoading(false);
  }

  const [feedbackEdit,setFeedbackEdit]=useState({
    item:{},
    edit:false
  })

  const deleteFeedback = async (id) => {
    if(window.confirm('Are you sure you want to delete the feedback')){
      await fetch(`/feedback/${id}`,{method:'DELETE'})
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = async (newFeedback) => {
    const response= await fetch('/feedback',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newFeedback),
    })
    
    const data=await response.json();
    setFeedback([data, ...feedback]);
  };

  const editFeedback=(item)=>{
    setFeedbackEdit({
      item,
      edit:true
    })
  }
  const updateFeedback= async(id,upditem)=>{

    const response=await fetch(`/feedback/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(upditem)
    })
    
    const data=await response.json();
    setFeedback(
      feedback.map((item)=>(item.id===id?{...item,...data}:item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        isLoading,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
