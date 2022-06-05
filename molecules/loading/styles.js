import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from {
    transform: translate(-50%,-50%) rotate(0deg); ;
  }

  to {
    transform: translate(-50%,-50%) rotate(360deg);
  }`
export const Spiner = styled.div`
width: 200px;
height: 200px;
margin-left: auto;
margin-right: auto;
display: inline-block;
overflow: hidden;
`

export const Ldio = styled.div`
width: 100%;
height: 100%;
position: relative;
transform: translateZ(0) scale(1);
backface-visibility: hidden;
transform-origin: 0 0;`

export const Div = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border: 20px solid #1366e2;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  top: 100px;
  left: 100px;
  box-sizing: content-box;
`

