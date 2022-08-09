import React from 'react';
import { Container } from './styles';

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement>{
    title: string;
}

export default function Button({title, ...props}: ButtonProps){
    return (
        <Container {...props}>
            {title}
        </Container>
    )
}