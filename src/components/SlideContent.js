import React from 'react';
import './SlideContent.css';

function SlideContent() {
  return (
    <section className="slide-content">
      <div className="slide-contents">
      </div>
      <div className="slide-navigation">
        <button className="btn prev" type="button" name="button" onclick="prevHandler()">Ir para a esquerda</button>
        <button className="btn next" type="button" name="button" onclick="nextHandler()">Ir para a direita</button>
      </div>
    </section>
  );
}

export default SlideContent;
