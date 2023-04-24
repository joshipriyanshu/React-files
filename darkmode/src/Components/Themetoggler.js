import React, {useContext} from "react";

import Themecontext from "../Context/Themecontext";

const Themetoggler = () => {

    const [thememode, setthememode] =useContext(Themecontext)

    return (
        <div
         onClick={
            () => (
                setthememode(thememode === "light" ? "dark" : "light" )
            )

         }   
        >

            <p> {thememode === "light" ? "Turn off" : "lights on" } </p>

            
        </div>

    )
    }

export default Themetoggler