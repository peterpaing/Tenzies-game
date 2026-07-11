import { use, useState } from "react"
import { useEffect } from "react"
import clsx from 'clsx'
import Confetti from 'react-confetti'


export default function Main(){

   const [button , setButton]=useState(()=>btnNumber())
   const gameWin = button.every(n=> n.isHeld)
   const [showTime, setShowTime] = useState(0)
   const [isGameStart , setGameStart ] = useState(false)
   const minutes = String(Math.floor(showTime / 60)).padStart(2, "0")
   const seconds = String(showTime % 60).padStart(2, "0")


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
        className={clsx(n.isHeld ? "green-btn" : '')}
    >
        {n.value}
    </button>
))

 function handleClick(index) {
    setButton(preBtn =>
        preBtn.map(n => {
            if (n.id === index) {
                setGameStart (true)
                return {
                    ...n,
                    isHeld: ! n.isHeld
                }
            }

            return n
        })
    )
}
 

    useEffect(() => {

    let time = 1

    if(isGameStart && !gameWin){

    const id = setInterval(() => {
        time = time + 1
        setShowTime(time)
    }, 1000)

    return () => clearInterval(id)
}
}, [isGameStart,gameWin])


    
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


function againBtn() {
    setButton(btnNumber())
    setGameStart(false)
    setShowTime(0)
}

return (
    <main>
       {gameWin ? <Confetti/> : null}
       <p className={clsx("time", gameWin ? "green-time" : '')} >{minutes}:{seconds}</p>
       <section>
       {RenderBtn}
        </section>
        <button className="roll" onClick={gameWin ? againBtn :rollBtn}>{gameWin ?"Win!": "Roll"}</button>
    </main>
)
}