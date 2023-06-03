import React, {useState} from "react";


import Icon from './components/icons';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card,CardBody,Container,Button, Col, Row} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const itemArray = new Array(9).fill("empty")

const App = () => {

  const [iscross, setIscross] = useState(false)
  const [winMessage, setwinMessaage] = useState("")


  const reloadgame = () => {

    setIscross(false)
    setwinMessaage("")
    itemArray.fill("empty", 0 ,9);
    
  }

  const checkWinner = () => {

    if (itemArray[0] === itemArray[1] &&
        itemArray[0] ===  itemArray [2] &&
        itemArray[0] !== "empty"
    ){



     setwinMessaage(`${itemArray[0] } won`)
    }

    if (itemArray[3] === itemArray[4] &&
      itemArray[3] ===  itemArray [5] &&
      itemArray[3] !== "empty"
  ){
   setwinMessaage(`${itemArray[3] } won`)
  }  

  if (itemArray[6] === itemArray[7] &&
    itemArray[6] ===  itemArray [8] &&
    itemArray[6] !== "empty"
){
 setwinMessaage(`${itemArray[6] } won`)
}  


if (itemArray[0] === itemArray[3] &&
  itemArray[0] ===  itemArray [6] &&
  itemArray[0] !== "empty"
){
setwinMessaage(`${itemArray[0] } won`)
}  


if (itemArray[1] === itemArray[4] &&
  itemArray[1] ===  itemArray [7] &&
  itemArray[1] !== "empty"
){
setwinMessaage(`${itemArray[1] } won`)
}  


if (itemArray[2] === itemArray[5] &&
  itemArray[2] ===  itemArray [8] &&
  itemArray[2] !== "empty"
){
setwinMessaage(`${itemArray[2] } won`)
} 

if (itemArray[0] === itemArray[4] &&
  itemArray[0] ===  itemArray [8] &&
  itemArray[0] !== "empty"
){
setwinMessaage(`${itemArray[0] } won`)
}  

if (itemArray[2] === itemArray[4] &&
  itemArray[2] ===  itemArray [6] &&
  itemArray[2] !== "empty"
){
setwinMessaage(`${itemArray[2] } won`)
}  

  }

 const changeItem = itemNumber => {

  if (winMessage) {

    return toast(winMessage, { type: "sucess"})

  }
  if (itemArray[itemNumber] === "empty") {

    itemArray[itemNumber] =iscross ? "cross" : "circle"
    setIscross(!iscross)

  } else{
    return toast ("already filled", {type: "error"})
  }


  checkWinner()


 }


  return (
  
  <Container className="p-5">



    <ToastContainer position="bottom-center"/>

    <Row>
    <Col md={6} className="offset-md-3" >
     
    {winMessage ? (
          <div className="mb-2 mt-2">
           <h1 className= "text-primary text-uppercase text-center" >
            {winMessage}
            </h1> 
            <Button color="success" block onClick={reloadgame}>

              Reload the game 

            </Button>

             </div>

        )  : (

          <h1  className="text-center text-warning">
            {iscross ? "cross" : "circle"} turns

          </h1>

        ) }
     
      <div className="grid">

       

      {itemArray.map((item, index) => (
        <Card className="icons" color="info" onClick={ () =>  changeItem(index)}>
          <CardBody className="box">

            <Icon name = {item} />
            
           

          </CardBody>

        </Card>

      ))}

      </div>
    </Col>

    </Row>

   
   <Button onClick={() => {reloadgame()}} color= "primary">  Restart the game </Button>


  </Container>
  
  
  
  
  
  
  
  
  
    )
}

export default App;
