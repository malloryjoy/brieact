import { useState } from 'react'
import React from 'react';

let cheese1 = "Brie";
let cheese2 = "Manchego";
let cheese3 = "Goat Cheese";
let knife1 = "Pronged Cheese Knife";
let knife2 = "Skeleton Knife";

function Display() {

    return (

        <div id="display">
            <h3>Cheeseboard Display</h3>
            <p className="basicFont">A board made of dark or light wood makes an ideal platter for charcuterie! A marble platter is a pretty alternative as well.</p>
            <br />
            <p><span style={{textAlign: "left", fontSize: 22}}>Best Cheese Knives</span><br />
                <span className="basicFont">Because your board features {cheese1}, {cheese2}, and {cheese3}, you will want to use a {knife1} to slice your {cheese1} and {cheese3}, and a {knife2} to slice the {cheese3}! </span></p>

        </div>


    )

}

export default Display