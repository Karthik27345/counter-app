
import { useState } from "react";
import "./counter.css"

const Counter = ()=>{

    const[count,setcount] = useState(0)

    const inc = ()=>{

        setcount(count+1)

    }


    const dec = ()=>{

if(count>0){
        setcount(count-1)}

    }

const reset = ()=>{
    setcount(0)
}

return(
    <>
    <div className="full flex justify-center">
        <div className="flex flex-col justify-center items-center gap-10">
<h1>Counter [{count}]</h1>
{count==0&&(<p className="text-gray-100">(Minimum limit reached)</p>)}

<div className="flex justify-center gap-20">
<button onClick={inc} className="border border-2 p-2">Increment</button>
<button onClick={dec}><span className="border border-2 p-2">Decrement</span></button>
<button onClick={reset} className="border border-2 p-2">Reset</button>
</div>
</div> 
</div>
</>
)


}



export default Counter