import styled from "styled-components";

export const Width = styled.div`
    
    max-width: 900px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:700px){
        margin-left: 150px;
        
        
}
@media screen and (max-width:638px){
        margin-left: 20px;
        
        
}
@media screen and (max-width:508px){
        margin-left: 30px;
        
        
}
   
`
export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    
`
export const H5 = styled.h5`
    color: white;
`
export const WorkSpace = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
   
`