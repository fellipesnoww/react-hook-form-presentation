import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 12px 5px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.tertiary};
    font-size: 16px;
    color: ${({theme}) => theme.colors.secondary};
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    margin-top: 30px;
    transition: 1.5s;

    &:hover{
        background-color: ${({theme}) => theme.colors.primary};
        opacity: 0.8;
    }
`;