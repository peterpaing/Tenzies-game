import { useState } from "react"

export default function Main(){

   const [button,setButton]=useState(()=>btnRender())


   function btnRender(){

    const dies=[]

     for (let i=0 ; i < 10 ; i++){
        const randomNum = Math.floor(Math.random()* 6)+1
        dies.push (randomNum)
    }

    return dies.map((n,index)=><button key={index}>{n}</button>)
    
}

return (
    <main>
        {button}
    </main>
)
}