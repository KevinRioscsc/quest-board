import styled from "styled-components";

export const Back = styled.div`
    background-image: url(${props => props.url});
    background-position: center;
    background-size: cover;
    height: 90vh;
`