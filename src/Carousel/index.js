import React , { useContext } from "react";
import {CarouselContext} from '../carouselContext';
import Arrow from 'react-arrow';
import get from 'lodash/get';
import ReactCardFlip from 'react-card-flip';
import "./index.css";

function Carousel() {
  const { isFlipped , handleFlipped , index , questionsList , handleClickRight , handleClickLeft} = useContext(CarouselContext) 
  return (
    <div>
        <Arrow
        onClick={handleClickLeft}
      className="arrow arrow-left"
      direction="left"
      shaftWidth={10}
      shaftLength={10}
      headWidth={30}
      headLength={15}
      fill="teal"
      stroke="teal"
      strokeWidth={2}
      
  />
    <ReactCardFlip isFlipped={isFlipped}>
      <div key="front" onClick={handleFlipped}  className="flip-card front">
          {get(questionsList[index] , "question" , "question here")}
      </div>
      <div key="back" onClick={handleFlipped} className="flip-card back">
          {get(questionsList[index] , "answer" , "answer  here")}
      </div>
    </ReactCardFlip>
   <Arrow
      onClick={handleClickRight}
      className="arrow arrow-right"
      direction="right"
      shaftWidth={10}
      shaftLength={10}
      headWidth={30}
      headLength={15}
      fill="teal"
      stroke="teal"
      strokeWidth={2}
      
  />
    </div>
  );
}

export default Carousel;
