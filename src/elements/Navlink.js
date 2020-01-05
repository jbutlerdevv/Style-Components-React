import styled from "styled-components";

export default styled.i`
    color: red;
    &:hover {
        color: white;
    }
    /* background: ${props => props.primary ? "red" : "white"};
    color: ${props => props.primary ? "white" : "red"}; */
`;