import styled from "styled-components";

export const AdminLinkContainer = styled.div`
display: flex;
flex-diretion: row;
align-items: center;
justify-content:space-around;
border-top: 1px solid #D8D8D8;
width: 100%;
margin-top: auto;
`
export const Link = styled.a`
text-decoration: none;
color:#45484A;
cursor: pointer;
&:hover{
   color: #1366E2; 
}
`