import React, {useState, useEffect} from 'react'

import {Container, Row, Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'


import Axios from "axios"
import MyCard from './Card'


const App = () => {

  const [details, setdetails] =useState({})
 const fetchDetails = async () => {

  const {data} = await Axios.get("https://randomuser.me/api/")
  console.log("response:",  data)

  const details = data.results[0] 

 setdetails(details) 


 }

 useEffect(() => {
  fetchDetails()
  console.log("iam use state")

 }, [])


  return (
  <Container fluid className='p-4 bg-primary App'>
    <Row>
    <Col md={4} className=" offset-md-4 mt-4">
      <MyCard details = {details}/>
    </Col>


    </Row>
    </Container>
);
   


  
}

export default App
