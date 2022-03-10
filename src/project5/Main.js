import React from "react";
import MemeInput from "./components/MemeInput";
import MemeOutput from "./components/MemeOutput";
import { useState } from "react";

const Main = () => {
    const [memeOutput, memeInput] = useState(["",""]);
    return (
        <main className="main-p5">
            <MemeInput memeInput={memeInput}/>
            <MemeOutput memeOutput={memeOutput}/>
        </main>
    )
}
export default Main