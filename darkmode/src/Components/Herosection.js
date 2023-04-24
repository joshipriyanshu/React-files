import React, {useContext} from "react";

import Themecontext from "../Context/Themecontext";
import Apptheme from "../color";

const HeroSection = () =>{

    const theme = useContext(Themecontext)[0];
    const currenttheme = Apptheme[theme];
    const [thememode, setthememode] =useContext(Themecontext)

    return( 
        
        <div
        
        style={

            {

                background: `${currenttheme.backgroundColor}`,
                color: `${currenttheme.textColor}`,
                textAlign: "center"
            }

        }
        
        >
        <h1> Theme Switcher</h1>
        <p> This is a paragraph  </p>

        <button

    
            onClick={
                () => (
                    setthememode(thememode === "light" ? "dark" : "light" )
                )

            }    


        style={{
            backgroundColor: "#26ae60",
            padding: "10px 150px",
            color: "#FFF",
            border: `${currenttheme.border}`         
        }}

        > click Me </button>

        </div>
    );

};

export default HeroSection;