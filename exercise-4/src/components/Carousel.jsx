import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const[cur, setCur]= React.useState(0);

  /* You will need to hanle the click on left and right button */
  function onClickLeft(){
    if(cur>0){
      setCur(cur-1);
    }
  }
  function onClickRight(){
    if(cur<images.length-1){
      setCur(cur+1);
    }
  }
  /* You will need to manage the cases when we are on the last image or first image*/
  function getClassName(index){
    if(index===cur){
      return ""
    }
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={onClickLeft}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[0].src} alt={images[0].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={onClickRight}/>
    </div>
  );
};
