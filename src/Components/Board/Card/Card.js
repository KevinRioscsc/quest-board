import styled from "styled-components";

export const CardContainer = styled.div`
    width: 272px;
    background: #ebecf0;
    border-radius: 5px;
    padding: 5px 5px;
    position: relative;
    max-height: 650px;
    overflow: auto;
   
    
    &::-webkit-scrollbar-thumb{
    border-radius: 50px;
    background: #8f54a0;
   
    }
    
`

export const ListContainer = styled.div`
    width: 272px;
    position: relative;
   
`
export const H5 = styled.h5`
`
export const Title = styled.div`
 padding: 10px 10px;
 
`
export const ListItems = styled.div`
     
    transition: all .2s ease-in-out;
    display: ${props => props.toggle ? 'none' : 'flex'};
    padding: 5px 5px;
    align-items: center;
    background-color:  #ebecf0;
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
  
    height: ${props => props.toggle ? '': '0'};
    transition: all .2s ease-in-out;
    overflow: hidden;
    width: 100%;
   
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
export const P = styled.p`
`
export const WordDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    background: white;
    border-radius: 5px;
    margin-bottom: 10px;
`