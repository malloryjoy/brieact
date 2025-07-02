import { useState } from 'react'
import React from 'react';


function About({ board }) {
console.log(board.bigCheese);
    return (

        <div id="about">
            <h3>{board.bigCheese}</h3>
            <p><span style={{fontWeight: "bold"}}>Flavor Profile: </span><span className="basicFont">{board.cheeseFlavor}</span><br />
            <span style={{fontWeight: "bold"}}>Texture: </span><span className="basicFont">{board.cheeseTexture}</span></p>
            <br />
            <p><span style={{fontSize: 22}}>About Your Cheese: </span><br /><span className="basicFont">
                {board.cheeseInfo}</span></p>


        </div>


    )

}

export default About