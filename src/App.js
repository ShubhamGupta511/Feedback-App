import Header from "./components/Header";


function App() {

    const title='Feedback-App'
    const body='this is First Feedback For the website';

    const loading =false;
    const showcomments=true;
    if(loading) return <h1>Loading...</h1>

   

    const comments=[
        {id:1,text:'Comment One'},
        {id:2,text:'Comment two'},
        {id:3,text:'Comment Three'}
    ]
    

    const commentBlock=( <div className='comments'>
    <h3> Comments({comments.length})</h3>

    <ul>
        {comments.map((comment,index)=>(
            <li key={index}>{comment.text}</li>

        ))}
    </ul>
</div>)

  return (
    <>
    <Header text='Feedback-App'/>
    <div className="container">
      <h1>My App</h1>
      <p>hi this is feedback-app</p>
      {showcomments && commentBlock} 
    </div>
    </>
  );
}
export default App;
