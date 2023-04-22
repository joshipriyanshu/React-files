import React, {Fragment} from "react"
import Provider from "./provider"
import Context from "./Context"

const Agents = () => (

     <Agentone />

)

 
const Agentone = () => (

    <Agenttwo />

)

const Agenttwo = () => (

    <Context.Consumer>
        {

            (Context) => ( 
                <Fragment>
                    <h3> Agent Info</h3>
                    <p>Mission name : {Context.data.mname}  </p>
                    <p> Agent id : {Context.data.agent}  </p>
                    <p> Missin Stauts : {Context.data.accept} </p>
                    <button onClick={Context.isMissionaccepted}> Click to accept </button>

                </Fragment>

            )
        }


    </Context.Consumer>
)



const App = () =>(

    <div>
        <h1>
            Context API
        </h1>
        <Provider>
        <Agents>


        </Agents>

        </Provider>

    </div>

)

export default App