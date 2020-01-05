import styled from "styled-components";

export default styled.a`
    color: firebrick;
    &:hover {
        color: aliceblue;
    }
    /* background: ${props => props.primary ? "red" : "white"};
    color: ${props => props.primary ? "white" : "red"}; */
`;