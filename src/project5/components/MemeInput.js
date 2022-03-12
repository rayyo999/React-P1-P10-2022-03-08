import React from "react";
import { useState } from "react";
import memeData from "../memeData";

const MemeInput = ({memeInput, setrandomUrl}) => {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const randomUrl = memeArray[randomNumber].url;

    function getText_setUrl(){
        memeInput(()=>{
            return {
                topText:topText, buttomText:buttomText
            }
        });
        setrandomUrl(randomUrl);
    }

    const [topText, settopText] = useState();
    function setTopText(e){
        settopText(e.target.value)
    }
    const [buttomText, setbuttomText] = useState();
    function setButtomText(e){
        setbuttomText(e.target.value)
    }
    
    return (
        <div className="form-p5">
            <div className="input">
                <label htmlFor="A"></label>
                <input type="text" id="A" placeholder="Top text" value={topText} onChange={setTopText} />
                <label htmlFor="B"></label>
                <input type="text" id="B" placeholder="Buttom text" value={buttomText} onChange={setButtomText} />
            </div>
            <button id="submitBtn" onClick={getText_setUrl}>Get a new meme image</button>
        </div>
    
    )
}
export default MemeInput