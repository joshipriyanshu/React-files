import React, {useContext, useState} from "react";
import {FormGroup, Input,Button,Form,InputGroup,  } from "reactstrap";


import {v4} from "uuid";

import {TodoContext} from "../Context/Todocontext";
import {ADD_TODO} from "../Context/action.types";


const TodoForm = ( ) =>{
    const [todostring, settodostring] =useState("");
    const {dispatch} =useContext(TodoContext)

    const handlesubmit = e => {

        e.preventDefault();
        if(todostring === "") {
            return alert("Please enter a todo");

        }

        const todo = {
            todostring,
            id: v4()


        }
        dispatch({

            type: ADD_TODO,
            payload: todo
        })

        settodostring("")
    }

    return(
        <Form onSubmit={handlesubmit}>
            <FormGroup>
                <InputGroup>
                <Input 
                type="text"
                name="todo"
                id = "todo"
                placeholder="Your next Todo"
                value={todostring}
                onChange={e=>settodostring(e.target.value)}
                />
            <InputGroup  addonType= "prepend">
            <Button
                color="warning"
            > Add</Button>



            </InputGroup>
                
                </InputGroup>
                
            </FormGroup>

        </Form>

    )

}

export default TodoForm