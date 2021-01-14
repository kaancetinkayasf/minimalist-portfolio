import React,{useEffect, useState} from "react";
import "./Square.css";

function Square(props) {
const [width,setWidth] = useState(0);
const [height,setHeight] = useState(0);
    useEffect (()=>{
        if(window.innerWidth < 600){
        setWidth(300);
        setHeight(300);
    }else{
        setWidth(1000);
        setHeight(600);
    }
}
        
    )

  return (
    <div className="content">
        <h2 className="s-header">{props.title}</h2>
      <div className="square">
        <a href={props.url}><img src={props.image} height={height} width={width} alt={props.link}/></a>
      </div>
    </div>
  );
}

export default Square;
