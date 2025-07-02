import { useState } from 'react'
import React from 'react';



function Display({board}) {

    return (

        <div id="display">
            <h3>Cheeseboard Display</h3>
            <p className="basicFont">A board made of dark or light wood makes an ideal platter for charcuterie! A marble platter is a pretty alternative as well.</p>
            <br />
            <p><span style={{textAlign: "left", fontSize: 22}}>Best Cheese Knives</span><br />
                <span className="basicFont">Because your board features {board.bigCheese}, {board.compCheese1}, and {board.compCheese2}, you will want to use a {board.knife1} to slice your {board.knife1Cheese}, and a {board.knife2} to slice the {board.knife2Cheese}! </span></p>

        </div>


    )

}

export default Display