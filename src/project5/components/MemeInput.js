import React from "react";
import { useState } from "react";

const MemeInput = ({memeInput}) => {
    function getText(){
        memeInput(
            [
                topText,
                buttomText
            ]
        )
    }
    const [topText, settopText] = useState();
    function top(e){
        settopText(e.target.value)
    }
    const [buttomText, setbuttomText] = useState();
    function buttom(e){
        setbuttomText(e.target.value)
    }
    return (
        <div className="form-p5">
            <div className="input">
                <label htmlFor="A"></label>
                <input type="text" id="A" placeholder="Top text" value={topText} onChange={top} />
                <label htmlFor="B"></label>
                <input type="text" id="B" placeholder="Buttom text" value={buttomText} onChange={buttom} />
            </div>
            {/* <input type="submit" id="submitBtn" value="Get a new meme image" onClick={getText}/> */}
            <button id="submitBtn" onClick={getText}>Get a new meme image</button>
        </div>
    
    )
}
export default MemeInput