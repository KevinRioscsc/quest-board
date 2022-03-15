import styled from "styled-components";
/* If we wanna pass a prop we use this
 ${props => props.yourProp} */
export const BoardWork = styled.div`
    width: 200px;
    height: 100px;
    background-image: url(${props => props.photo});
    background-position: center;
    background-size:100%;
    background-repeat: no-repeat;
    border-radius: 10px;
   
    cursor: pointer;
    transition: .2s ease-in-out;
    
`
export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    transition: .2s ease-in-out;
    &:hover{
        background-color: rgba(0, 0, 0, 0.178);
        
    }
`
export const Title = styled.h6`
    color: whitesmoke;
    font-size: 18px;

`