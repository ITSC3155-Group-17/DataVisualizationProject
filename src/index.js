import React from 'react';
import ReactDom from 'react-dom';
import Bars from './components/bars';
import  './index.css'

function Greeting(){
  return (
    <div className ="page">
      <div className = "header"></div>
      <div className = "bars"><Bars/></div>
    </div>
  );
}

ReactDom.render(<Greeting/>, document.getElementById('root'));