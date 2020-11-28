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
    var val = [];
    for  (var i = 0; i < 20; i++){
        val.push(Math.random() * 100);
    }
}

//Can use for video background
/*<video className = "videoContainer" autoPlay loop muted>
                <source src={video} type='video/mp4'/>
            </video>
*/
export default Bars