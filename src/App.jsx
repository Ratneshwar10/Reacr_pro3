import { useState } from "react";
import StartGame from "./Components/StartGame";
import GameStarted from "./Components/GameStarted";




function App() {

  const[isGameStarted,setIsGameStarted]= useState(false)

  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=> !prev)
  }

  return (
    <>
    {isGameStarted ? <GameStarted/>:<StartGame  toggle={toggleGamePlay}/>}
    </>
  )
}

export default App

