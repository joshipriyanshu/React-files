import React, {useReducer} from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

import {TodoContext} from "./Context/Todocontext"

import todoreducers from "./Context/reducers"
import TodoForm from "./components.js/todoform";
import Todos from "./components.js/todos";

const App = () => {
  const[todos, dispatch] = useReducer(todoreducers, [])
  
  
  return(
    <TodoContext.Provider value ={{todos, dispatch}}>

    <Container fluid>
    <h1> Todo App with Context API</h1>
    
    <TodoForm></TodoForm>
    <Todos> </Todos>
    </Container>

    


    </TodoContext.Provider>

  );

}

export default App;
