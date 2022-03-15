import styled from "styled-components";

export const Box = styled.div`
    margin-top: 10px;
    height: 150px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-image: url(${props => props.url});
    background-position: center;
    background-size: cover;
    box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
`
export const Choices = styled.div`
    display: flex;
    gap: 10px;
`
export const ChoiceBox = styled.div`
    height: 50px;
    width: 70px;
    background-image: url(${props => props.photo});
    background-position: center;
    
    background-size: contain;
    border-radius: 5px;
    cursor: pointer;


`
export const Overlay = styled.button`
    height: 100%;
    width: 100%;
    transition: all .2s ease-in-out;
    background: transparent;
    outline: none;
    border: 0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    .appear{
        opacity: 0;
    }
    &:hover{
        background-color:  rgba(0, 0, 0, 0.521);
    }
    &:focus{
        background-color:  rgba(0, 0, 0, 0.521);
        .appear{
            opacity: 1;
    }
    }
    
`