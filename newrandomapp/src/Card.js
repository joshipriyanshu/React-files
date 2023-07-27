import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap"
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa"


const MyCard = ({details}) => {

    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width= "150"
                className="rounded-circle img-thumbnail border-danger"
                src = {details.picture?.large}
                />

            <CardTitle className="text-primary">
                <h1>

     <span className="pr-7">{details.name?.title} </span>
     <span className="pr-7">{details.name?.first}</span>
     <span className="pr-7">{details.name?.last}</span>
                </h1>


            </CardTitle>

            <CardText>
                

                
                
             
                
                <div className="border border-primary text-center d-flex gap-2  ">
            


                <span >     <FaMapMarkedAlt/>  {details.location?.city} </span>    
              
              <span>   {details.email}  </span>

                <span> <FaPhone/>
             
             {details.phone}</span>

                
                </div>

             

                
            </CardText>

            


            </CardBody>

        </Card>


    )

}

export default MyCard