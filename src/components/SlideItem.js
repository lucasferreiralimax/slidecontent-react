import React from 'react';
import './SlideItem.css';

function SlideItem(props) {
  // const [actived, setActived] = useState(props.actived);
  // let itemRef = useRef();
  // useEffect(() => {
  //   // console.log("itemRef");
  //   // console.log(itemRef.current.classList);
  // });
  return (
    <article className={ "slide-item" + (props.actived ? " actived" : "" )}>
      <a href={props.url} target={props.target}>
        <h1>{props.title}</h1>
        <img src={props.img} alt={props.title} />
      </a>
    </article>
  );
}

export default SlideItem;
