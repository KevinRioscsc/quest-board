import styled from "styled-components";

export const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.521);
    position: absolute;
    overflow: hidden;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease-in;
    top: 0;
    visibility: ${props => props.clicked ? 'visible': 'hidden'};  
    opacity: ${props => props.clicked ? '1': '0'};
`
export const CreateTemplate = styled.div`
    transition: all.3s ease-in-out;
    padding: 0 20px;
    transform:${props => props.clicked ? 'translateY(0)': 'translateY(100%)'} ;
    opacity: ${props => props.clicked ? '1': '0'};
    height: 500px;
    width: 350px;
    background: white;
`
export const FirstSec = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;

`
export const Title = styled.p`
    text-align: center;
    padding: 10px 10px;
`
export const X = styled.div`
    position: absolute;
    right: 0;
    padding: 10px 20px;
    cursor: pointer;
`