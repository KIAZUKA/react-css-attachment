import styled from "styled-components";
export const StyledComponents= () =>{
  return(
    <Container>
    <T>- Styled components </T>
    <B>Fight</B>
    </Container>
  );
};

const Container = styled.div`
    border: solid 2px #392eff; 
    border-Radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-Content: space-around;
    align-Items: center;
`;
const T = styled.p`
    margin:0;
    color:#3d84a8;
`;
const B = styled.button` 
    background-Color: #abedd8;
    border:none;
    padding:8px;
    border-Radius:8px;
`