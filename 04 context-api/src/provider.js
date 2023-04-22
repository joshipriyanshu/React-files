import React, {useState} from "react";

import Packagecontext from "./Context"


const Provider = props => {
    const [Mission , setMission] = useState({

        mname: "Go to Russia",
        agent : "007",
        accept: "NOt Accepted" 



    })

    return (

        <Packagecontext.Provider
        value={{

            data:Mission,
            isMissionaccepted: () => {

                setMission({...Mission, accept: "ACCEPTED"})
            }


        }}

        > 
            {props.children}

        </Packagecontext.Provider>
    )

}

export default Provider 

