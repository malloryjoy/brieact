import { useState } from 'react'
import React from 'react';

let name = "Brie";
let cheeseFlavor = "Earthy and buttery";
let cheeseTexture = "Creamy with a soft consistency";
let cheeseInfo = "Originating in France, Brie is often formed in a round mould using whole or semi-skimmed milk. Though delicious as is, Brie is often baked for an extra gooey, easily spreadable cheese for any cheese board!";

function About() {

    return (

        <div id="about">
            <h3>{name}</h3>
            <p><span style={{fontWeight: "bold"}}>Flavor Profile: </span><span className="basicFont">{cheeseFlavor}</span><br />
            <span style={{fontWeight: "bold"}}>Texture: </span><span className="basicFont">{cheeseTexture}</span></p>
            <br />
            <p><span style={{fontSize: 22}}>About Your Cheese: </span><br /><span className="basicFont">
                {cheeseInfo}</span></p>


        </div>


    )

}

export default About