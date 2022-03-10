import React from "react";
import Card from "./Card";
import { Data } from "./Data";

const Main = () => {
    return (
        <main className="main-p4">
        {
            Data.map(item => {
                return <Card key={item.id} info={item}/>
            })
        }
        </main>
    )
}
export default Main