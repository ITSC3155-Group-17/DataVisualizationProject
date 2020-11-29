import React from 'react';
import ReactDom from 'react-dom';
import Bars from './components/bars';
import Values from './components/bars';
import  './index.css'

function Greeting(){
  return (
  <div className="page">
    <section>
      <Values />
    </section>
  </div>
  );
}


ReactDom.render(<Greeting/>, document.getElementById('root'));