import React from "react";

const MemeOutput = ({memeOutput}) => {
    return (
        <div className="output-p5">
            <h1 className="topText">{memeOutput[0]}</h1>
            <h1 className="bottomText">{memeOutput[1]}</h1>
            <img src="https://picsum.photos/300/200"/>
        </div>
    )
}
export default MemeOutput