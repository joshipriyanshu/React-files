import React from "react"
import  ReactDOM  from "react-dom"
import Navbar from "./Navbar"
import Herosection from "./Herosection"
import Portfolio from "./portfolio"



function App () {
return (
    
    <div>
        <h1> Hello world  </h1>
    <Navbar/>
    <Herosection/>
    <Portfolio/>

    </div>
)

}


ReactDOM.render(<App/> , document.getElementById("root"))