import { useState } from "react"
import clsx from 'clsx'

export default function Main(){

   const [button,setButton]=useState(()=>btnNumber())




   function btnNumber(){
    const dies=[]

     for (let i=0 ; i < 10 ; i++){
        const randomNum = Math.floor(Math.random()* 6)+1
        dies.push ({
            value: randomNum ,
            isHeld: false,
            id : i
        })
    }
    return dies
}

  const RenderBtn = button.map((n, index) => (
    <button
        key={index}
        onClick={()=>handleClick(index)}
        className={clsx(n.isHeld ? "green" : '')}
    >
        {n.value}
    </button>
))

 function handleClick(index) {
    setButton(preBtn =>
        preBtn.map(n => {
            if (n.id === index) {
                return {
                    ...n,
                    isHeld: ! n.isHeld
                }
            }

            return n
        })
    )
}
 
    
function rollBtn(){
    setButton(preBtn=>
        preBtn.map(n=>{
            if (!n.isHeld){
                return {
                    ...n,
                    value : Math.floor(Math.random()* 6)+1 ,
                }
            }

            return n
        })
    )
}


return (
    <main>
       <section>
        {RenderBtn}
        </section>
        <button className="roll" onClick={rollBtn}>Roll</button>
    </main>
)
}