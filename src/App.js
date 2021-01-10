import './App.css';
import AnimatedTyping from './AnimatedTyping';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Square from './Square';
import React from 'react';
import chess from './image/chess.jpg'
import ak47 from './image/ak47.jpg'
import lego from './image/lego.jpg'
import wick from './image/wick.jpg'
import bowling from './image/bowling.jpg'
import Helmet from "react-helmet";

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.goToProjects = this.goToProjects.bind(this);
  }

  goToProjects(){
    if(window.innerWidth < 600){
      window.scrollTo(0, 800);
  }else{
    window.scrollTo(0, 1000);
  }
  }

  goToContact(){
    if(window.innerWidth < 600){
      window.scrollTo(0,7000);
  }else{
    window.scrollTo(0, 7000);
  }
  }

  render(){
    return (
      <div className="content">
        <div className="header">
        <div className="projects">
         <button onClick={this.goToProjects}>Projects</button> 
          </div>
        <div className="contact">
         <button onClick={this.goToContact}>Contact</button> 
          </div>
        </div>
        <div className="textarea">
        <div className="hitext">
          <AnimatedTyping message="Hi I'm Ali Emre"/>    
        </div>
        <div className="infotext">
          <AnimatedTyping message="I'm a 2D & 3D Designer"/>    
        </div>
        </div>
        <div className="projects-header"><h1>PROJECTS</h1></div>
        <div className="projects-content">
          <Square image={chess} title="Chess" url="https://www.artstation.com/artwork/w6Nzm5"/>
          <Square image={ak47} title="AK-47" url="https://www.artstation.com/artwork/kDwbbd"/>
          <Square image={lego} title="Lego" url="https://www.artstation.com/artwork/481QVW"/>
          <Square image={wick} title="John Wick Illustration" url="https://www.artstation.com/artwork/QrEXqx" />
          <Square image={bowling} title="3D Bowling Scene" url="https://www.artstation.com/artwork/L3Req5"/>


        </div>
        <div className="contact-info-header"><h1>CONTACT</h1></div>
        <div className="contact-info">
          <h2>aliemre3883gs1@gmail.com</h2>
          <CopyToClipboard text="aliemre3883gs1@gmail.com">
          <button>Copy</button>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
  
}

export default App;
