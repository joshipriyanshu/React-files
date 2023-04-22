import React, {useState} from "react";
import "./App.css"


function  Counter () {

  const [Count, setCount]  = useState(0)

   
 return ( 
   <div>



<h1> counter app </h1>

<h2> The count is {Count}  </h2>


 <button onClick={()=> Count> 10 ? " " : setCount(Count+1)} > Increase count  </button>
 <button  onClick={()=> Count<1? " " : setCount(Count-1)}> Decrease count  </button>
 <button onClick={()=> ( setCount(0))}> Reset count  </button>







   </div>



 )
}

export default Counter