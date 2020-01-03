import React  , { useState } from "react";
import "./index.css";
import Carousel from '../Carousel';
import isEmpty from "lodash/isEmpty";
import {CarouselContext} from '../carouselContext';
import { Link } from "react-router-dom";

function Quiz() {
  const[questionsList , setQuestionsList] = useState(getQuestionsList);
   const [isFlipped , setIsFlipped] = useState(false);
   const [index , setIndex] = useState(0);

   function handleFlipped(){
     setIsFlipped(!isFlipped);
   }
  function getQuestionsList(){
    const storageQuestionList = window.localStorage.getItem("questionList");
    return storageQuestionList? JSON.parse(storageQuestionList) : []
  }
  function handleClickRight(){
    setIndex( (index + 1) % questionsList.length )
  }
  function handleClickLeft(){
    index === 0 ? setIndex(questionsList.length - 1) : setIndex(index - 1);
  }

  function handleDalete(){
    
    const newQuestionList = questionsList.filter((_ , i)=> index !== i);
    if(index >= newQuestionList.length || index < 0) setIndex(0);
    setQuestionsList(newQuestionList);
    window.localStorage.setItem("questionList" , newQuestionList);
  }
  const carouselContextValue = {
    isFlipped ,
    handleFlipped,
    questionsList,
    index,
    handleClickRight,
    handleClickLeft
  }

  return (
    <div style={{width:'90%' , textAlign:'center' , margin:'0 auto'}}>
          { !isEmpty(questionsList) ? 
            <CarouselContext.Provider value={carouselContextValue}>
                     <Carousel/>
            </CarouselContext.Provider>
                     
           : 
           <h3>There are no question , Please click {" "}
          <Link to="/form">here</Link> for add new question</h3>
      }
      {
       questionsList.length ? <button className="delete-button" onClick={handleDalete}>Delete</button> : null 
      }
       
    </div>
   
  );
}

export default Quiz;
