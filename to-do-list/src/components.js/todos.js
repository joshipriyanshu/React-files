import React, {useContext} from "react";

import{ ListGroup, ListGroupItem  } from "reactstrap"
// import {FaCheckDouble} from "react-icon/"
import { TodoContext } from "../Context/Todocontext";

import { REMOVE_TODO } from "../Context/action.types";

const Todos = () =>{

    const{todos, dispatch} =useContext(TodoContext);

    return (

        <ListGroup className="hero">
            {todos.map(todo => (
                <ListGroupItem key = {todo.id}>
                    {todo.todostring}

                    <span > 
                    <button className="edittodo ">
                        
                        
                        Edit </button>







                    <button   className="Deletetodo"
                    onClick={
                       () =>{
                        dispatch
                            ({type : REMOVE_TODO,
                            payload: todo.id}
                                          )
                       } 

                    }   >Clear</button> 
                    
                    
                    
                    </span>

                </ListGroupItem>
            ))}

        </ListGroup>
    )

}

export default Todos