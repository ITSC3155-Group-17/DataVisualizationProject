import React from 'react';
import './bars.css';
import {bubbleSort} from './sort.js';

//From https://reactjs.org/docs/react-component.html#constructor
export default class Bars extends React.Component{

    //From https://reactjs.org/docs/react-component.html#constructor
    constructor(props){
        super(props);

        //Creates an array state that is empty
        //from https://www.robinwieruch.de/react-state-array-add-update-remove
        this.state = {val: []};
        
    }

    bubble = () =>{
        const values = bubbleSort(this.state.val);
        this.setState({values});
    }
    
    //Cannont modify the array state within render
    render() {
        return(
        <div className = "container">
            {this.state.val.map((val, i) => (
                <div className = "size" 
                key={`some-value-${i}`}
                style={{height: `${val*8}px`}}>
                    {val}
                </div>
            ))}
        <div>
                <button type="button" onClick={this.bubble}>
                    Bubble Sort
                </button>
            </div>
            <div>
                <button type="button" onClick={this.quickSort}>
                    Quick Sort
                </button>
            </div>
            <div>
                <button type="button" onClick={this.mergeSort}>
                    Merge Sort
                </button>
            </div>
            <div>
                <button type="button" onClick={this.randomizeArray}>
                    Randomize
                </button>
            </div>
        </div>
    );
}
    //Runs and calls the function that fills the array with values
    componentDidMount(){
        this.randomizeArray();
    }

    //Sets random values for the array state val and updates the 
    randomizeArray = () => {
        var val = [];
        
        //20 values in an array that are between 1 and 100
        for  (var i = 0; i < 20; i++){
            val.push(Math.floor((Math.random() * 100) + 1));
        }
        this.setState({val});
    }
}