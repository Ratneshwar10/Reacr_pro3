import styled from "styled-components"



const StartGame = ({toggle}) => {
  return (
    <Container>
      <div><img src="/Img/dices.png" alt="" /></div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
display:flex;
margin:0 auto;
height:100vh;
max-width:1180px;
align-items:center;

.content {
h1{
    font-size:96px;
    white-space:nowrap;
}
}
`;
const Button = styled.button`
padding: 10px 18px;
background:#000000;
color:white;
border-radius:5px;
min-width:220px;
border:none;
font-size:16px;
border:1px solid transparent;
transition:0.5s background ease-in;
cursor:pointer;

&:hover{
    background-color:white;
    border:1px solid black;
    color:black;
    transition:0.3s background ease-in;
}
`