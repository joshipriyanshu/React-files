import React, {useState} from "react";
import Themecontext from "./Context/Themecontext";

import Header from "./Components/Header";
import HeroSection from "./Components/Herosection";







const App = () => {
  const themehook = useState("light")
  return (
    <Themecontext.Provider value={themehook}>
      <div>
      <Header />
      <HeroSection />

      </div>


    </Themecontext.Provider>

  )

}

export default App;
