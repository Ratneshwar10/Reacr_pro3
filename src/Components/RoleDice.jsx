import styled from "styled-components"

const RoleDice = ({currentDice,roleDice}) => {


  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/Img/dice/dice_${currentDice}.png`} alt="Image is not showing" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    .dice{
        cursor: pointer;
    }
    p{
        font-size: 24px;
    }
`;
