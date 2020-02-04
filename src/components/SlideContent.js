/* eslint-disable */
import React, { useEffect } from 'react';
import './SlideContent.css';

function SlideContent(props) {

  useEffect(() => {
    let slideAnimationInitial = setInterval(() => {
      nextHandler()
    }, 6000);

    slideAnimationInitial

    if(props.animation) {
      clearInterval(slideAnimationInitial)

      let slideAnimationOptions = setInterval(() => {
        if(props.animation.direction == "prev") {
          prevHandler()
        } else {
          nextHandler()
        }
      }, props.animation.time);

      if(props.animation.disabled) {
        clearInterval(slideAnimationOptions)
      } else {
        slideAnimationOptions
      }
    }
  });

  const prevHandler = (e) => {
    let slides = []
    if(e) {
      slides = e.target.parentElement.parentElement.querySelectorAll(".slide-item")
    } else {
      slides = document.getElementById(props.id).querySelectorAll(".slide-item")
    }

    for(let item of slides) {
      if(item.classList.contains("actived")) {
        if(item.previousElementSibling) {
          item.classList.remove("actived")
          item.previousElementSibling.classList.add("actived")
        } else {
          item.classList.remove("actived")
          slides[slides.length - 1].classList.add("actived")
        }
        break;
      }
    }

  };
  const nextHandler = (e) => {
    let slides = []
    if(e) {
      slides = e.target.parentElement.parentElement.querySelectorAll(".slide-item")
    } else {
      slides = document.getElementById(props.id).querySelectorAll(".slide-item")
    }

      for(let item of slides) {
        if(item.classList.contains("actived")) {
          if(item.nextElementSibling) {
            item.classList.remove("actived")
            item.nextElementSibling.classList.add("actived")
            break;
          } else {
            item.classList.remove("actived")
            slides[0].classList.add("actived")
          }
        }
      }
  };
  return (
    <section id={props.id} className="slide-content">
      <div className="slide-contents">
        {props.children}
      </div>
      { props.nav === "true" &&
        <div className="slide-navigation">
          <button className="btn prev" type="button" name="button" onClick={prevHandler}>Ir para a esquerda</button>
          <button className="btn next" type="button" name="button" onClick={nextHandler}>Ir para a direita</button>
        </div>
      }
    </section>
  );
}

export default SlideContent;
