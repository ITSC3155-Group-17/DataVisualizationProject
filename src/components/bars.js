import React from 'react';
import './bars.css';
//import video from './video.mp4'

function Bars(){
    return (
        <section>
            <div className = "rect"></div>
        </section>
    );
}

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
                <div key={`some-value-${i}`}>
                    <div className = "size">{val}</div>
                </div>
            ))}
        </div>
    );
}

//Can use for video background
/*<video className = "videoContainer" autoPlay loop muted>
                <source src={video} type='video/mp4'/>
            </video>
*/
export default Values