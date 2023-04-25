import React, {useContext} from "react";

import{ ListGroup, ListGroupItem  } from "reactstrap"
// import {FaCheckDouble} from "react-icon/"
import { TodoContext } from "../Context/Todocontext";

import { REMOVE_TODO } from "../Context/action.types";

const Todos = () =>{

    const{todos, dispatch} =useContext(TodoContext);

    return (

        <ListGroup className="mt-2 mb-2 items">
            {todos.map(todo => (
                <ListGroupItem key = {todo.id}>
                    {todo.todostring}

                    <span className="float-right ml-80"
                    onClick={
                       () =>{
                        dispatch
                            ({type : REMOVE_TODO,
                            payload: todo.id}
                                          )
                       } 

                    }   
                    > clear </span>

                </ListGroupItem>
            ))}

        </ListGroup>
    )

}

export default Todos