/**@jsxRuntime classic */
/**@jsx jsx */

import {jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = ()=>{
  const containerStyle = css`
  border: solid 2px #392eff; 
    border-Radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-Content: space-around;
    align-Items: center;
  `;
  const PStyle = css`
    margin:0;
    color:#3d84a8;
  `;

  return(
    <div css={containerStyle}>
     <p css={PStyle}>- Emotion -</p>
     <SButton>Fight</SButton>
    </div>
  );
};
const SButton = styled.button`
    background-Color: #abedd8;
    border:none;
    padding:8px;
    border-Radius:8px;
`