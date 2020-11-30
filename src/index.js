import React from 'react';
import ReactDom from 'react-dom';
import Bars from './components/bars';
import  './index.css'

function Greeting(){
  return (
  <div className="page">
      <Bars/>
  </div>
  );
}

export default Greeting;

ReactDom.render(<Greeting/>, document.getElementById('root'));