import React , {useState, useEffect} from "react";
import isEmpty from 'lodash/isEmpty';
import "./index.css";

function QuizQuestionForm() {
  const [question , setQuestion]  = useState("");
  const [answer , setAnswer] = useState("");
  const [questionEntity , setQuestionEntity] = useState({});
  
  // handle submit
  function handleSubmit(e){
    e.preventDefault();
        if(!question || !answer){
          alert("Please fill all form ");
          return ;
        }
   
    setQuestionEntity({question , answer});
    setQuestion("");
    setAnswer("");
  }
  // getQuestionList
  function getQuestionList(){
    
      const storedQuestionList = window.localStorage.getItem("questionList");
      if(storedQuestionList){
        return[...JSON.parse(storedQuestionList) , questionEntity];
    }else{
      return[questionEntity];
    }
  }
  // set local storage
  function setLocalStorage(){
     if(!questionEntity || isEmpty(questionEntity)) return ;
     const questionList = getQuestionList();
     window.localStorage.setItem("questionList" , JSON.stringify(questionList));
  }

  useEffect(setLocalStorage , [questionEntity]);

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="guestion-input"><h2>Question</h2></label>
        <input value={question} onChange={e=>setQuestion(e.target.value)} type="text" id="guestion-input" className="display-block"/>

        <label htmlFor="answer-input"><h2>Answer</h2></label>
        <textarea value={answer} onChange={e=>setAnswer(e.target.value)} cols="50" row="4" id="answer-input" className="display-block"></textarea>

        <input type="submit" id="submit" />

      </form>
     
    </div>
  );
}

export default QuizQuestionForm;
