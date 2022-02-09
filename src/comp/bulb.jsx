import React, { useState } from "react";
import Imgon from './image/on.png'
import Imgoff from './image/off.png'
import './bulb.css'


const Bulb = ()=>{


    const [bulbon , bulboff] = useState("On This Bulb")

const [onbulb , offbulb] = useState(Imgoff)

    const togle = ()=>{
        if(bulbon == "On This Bulb" && onbulb == Imgoff){
            bulboff("Off This Bulb")
            offbulb(Imgon)
        }
        else{
            bulboff("On This Bulb")
            offbulb(Imgoff)
        }
    }


    return(
        <>

      <div className="container">
          <div className="img"><img src={onbulb} />
          <button onClick={togle} className="btn btn-secondary">{bulbon}</button>
          
          </div>
      </div>
        </>
    )
}

export default Bulb;