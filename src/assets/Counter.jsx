
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
    <div className="full flex justify-center items-center px-4">
        <div className="flex flex-col justify-center items-center gap-10 text-center">
<h1 className="text-2xl font-semibold">Counter [{count}]</h1>
{count==0&&(<p className="text-gray-100">(Minimum limit reached)</p>)}

<div className="flex flex-col sm:flex-row justify-center gap-5">
<button onClick={inc} className="border-yellow-400 border-2 py-2 px-5">Increment</button>
<button onClick={dec}><span className="border-yellow-400 border-2 py-2 px-5">Decrement</span></button>
<button onClick={reset} className="border-yellow-400 border-2 py-2 px-5">Reset</button>
</div>
</div> 
</div>
</>
)


}



export default Counter