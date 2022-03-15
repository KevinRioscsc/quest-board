import styled from "styled-components";


export const ListContainer = styled.div`
    width: 272px;
    position: relative;
   
`
export const ListItems = styled.div`
     
    transition: all .2s ease-in-out;
    display: ${props => props.toggle ? 'none' : 'flex'};
    padding: 5px 5px;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.400);
    gap: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: all .2s ease-in-out;
    &:hover{
        background-color: rgba(255, 255, 255, 0.600);
   }
`
export const Input = styled.input`
    width: 100%;
    &:focus{
        border: 1px solid  #0079bf;
    }
   
`
export const InputList = styled.div`
    
    display: ${props => props.toggle ? 'unset': 'none'}; 
    position: absolute;
    top: 0;
    height: ${props => props.toggle ? '': '0'};
    transition: all .2s ease-in-out;
    overflow: hidden;
    width: 100%;
    padding: 5px 5px;
    background: #ebecf0;
    border-radius: 5px;
    
`
export const Submit = styled.div`
    display: flex;
    margin-top: 5px;
    align-items: center;
    gap: 20px;

`
export const Button = styled.button`
    outline: none;
    border: 0;
    background: #0079bf;
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
    transition: all .2s ease-in-out;
    &:hover{
        background: #00639c;
    }
`