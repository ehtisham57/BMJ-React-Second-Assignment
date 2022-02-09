import { Button } from "bootstrap";
import React, { useState } from "react";
import  ReactDOM from "react";
import './header.css'
 const loremm = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const Heading = "Click Me For More Information"


 const Head = ()=>{


    const [ena , disa] = useState("Enable Dark Mode")


    const [myStyle , changeStyle] = useState({
        color:"black",
        backgroundColor:"white"
    })


    const toogle = ()=>{
        if(myStyle.color == "black" && myStyle.backgroundColor =="white" && ena == "Enable Dark Mode"){
            changeStyle({
                color:"white",
                backgroundColor:"black"
            })
            disa("Enable light Mode")
        }
        else{
            changeStyle({
        color:"black",
        backgroundColor:"white"
            })
            disa("Enable Dark Mode")
        }
    }
   

   

    return(
        <>


        <div className="container" style={myStyle}>

        <button type="button" class="btn btn-primary" onClick={toogle}>{ena}</button>

        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingOne" style={myStyle}>
      <h2 className="mb-0" style={myStyle}>
        <button style={myStyle} className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {Heading}
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" style={myStyle}>
      <div className="card-body" style={myStyle}> 
      {loremm}
      </div>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingTwo" style={myStyle}>
      <h2 className="mb-0">
        <button style={myStyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        {Heading}
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
      {loremm}
      </div> 
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree" style={myStyle}>
      <h2 className="mb-0" style={myStyle}>
        <button style={myStyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        {Heading}
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample" style={myStyle}>
      <div className="card-body" style={myStyle}>
      {loremm}
      </div>
    </div>
  </div>
</div>
</div>
        </>
    )
}

export default Head