import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"
import { useState } from "react"


const GameStarted = () => {
  const [score,setScore] = useState(0)
  const [selectNumber,setSelectNumber] = useState();
  const [currentDice,setCurrentDice] = useState(1)

  const generateRandomNumber = (min,max) =>{
    // console.log(Math.floor(Math.random()*(max-min)+min))
    return Math.floor(Math.random()*(max-min)+min);
}
const roleDice = () =>{
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber)
    if(selectNumber == randomNumber){
      setScore((prev) => prev + randomNumber)
    }
    else{
      setScore((prev) => prev - 2)
    }
    setSelectNumber('')
}

  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore score={score}/>
      <NumberSelector selectNumber={selectNumber} setSelectNumber={setSelectNumber}/>  {/*logic to use with props */}
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice}/> {/* using props */}
    </MainContainer>
  )
}

export default GameStarted

const MainContainer = styled.div`
padding-top: 70px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
