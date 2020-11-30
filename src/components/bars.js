import React from 'react';
import './bars.css';

//From https://reactjs.org/docs/react-component.html#constructor
export default class Bars extends React.Component{

    //From https://reactjs.org/docs/react-component.html#constructor
    constructor(props){
        super(props);
        //Creates an array state that is empty
        //from https://www.robinwieruch.de/react-state-array-add-update-remove
        this.state = {val: []};
    }
    
    //Cannont modify the array state within render

    render() {
        return(
        <div>
            {this.state.val.map((val, i) => (
                <div className = "size" 
                key={`some-value-${i}`}
                style={{height: `${val*8}px`}}>
                    {val}
                </div>
            ))}
        </div>
    );
}
    //Runs and calls the function that fills the array with values
    componentDidMount(){
        this.randomizeArray();
    }

    //Sets random values for the array val and updates the 
    randomizeArray(){
        var val = [];
        
        //20 values in an array that are between 1 and 100
        for  (var i = 0; i < 20; i++){
            val.push(Math.floor((Math.random() * 100) + 1));
        }
        this.setState({val});
    }
}