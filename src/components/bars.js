import React from 'react';
import './bars.css';
//import video from './video.mp4'


//Creates an array of 20 values
function Values(){
    //creates array of 20 ints with values between 1-100
    var val = [];
    for  (var i = 0; i < 20; i++){
        val.push(Math.floor((Math.random() * 100) + 1));
    }

    //Returns a display
    return(
        <div>
            {val.map((val, i) => (
                <div className = "size" 
                key={`some-value-${i}`}
                style={{height: `${val*8}px`}}>
                    {val}
                </div>
            ))}
        </div>
    );
}

export default Values