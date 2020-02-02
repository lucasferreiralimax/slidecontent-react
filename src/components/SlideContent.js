import React from 'react';
import './SlideContent.css';

function SlideContent(props) {
  return (
    <section className="slide-content">
      <div className="slide-contents">
        {props.children}
      </div>
      <div className="slide-navigation">
        <button className="btn prev" type="button" name="button" onClick="prevHandler()">Ir para a esquerda</button>
        <button className="btn next" type="button" name="button" onClick="nextHandler()">Ir para a direita</button>
      </div>
    </section>
  );
}

export default SlideContent;
