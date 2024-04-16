import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"


const GameStarted = () => {
  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore/>
      <NumberSelector/>
      </div>
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
