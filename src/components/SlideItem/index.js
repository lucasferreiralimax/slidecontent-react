import React from 'react';
import './style.scss';

function SlideItem(props) {
  return (
    <article className={ `${ props.className } slide-item ${props.actived ? " actived" : ""} `}>
      <a data-testid="link-item" href={props.url} target={props.target}>
        <h1>{props.title}</h1>
        <img src={props.img} alt={props.title} />
      </a>
    </article>
  );
}

export default SlideItem;
