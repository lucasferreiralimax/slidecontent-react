import React from 'react';
import './SlideItem.css';

function SlideItem(props) {
  return (
    <article className={ "slide-item" + (props.actived ? " actived" : "" )}>
      <a href={props.url} target={props.target}>
        <h1>{props.title}</h1>
        <img src={props.img}/>
      </a>
    </article>
  );
}

export default SlideItem;
