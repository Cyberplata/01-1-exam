import ReactDOM from 'react-dom/client';
import styled, { css } from "styled-components";


const StyledContext = styled.a`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    white-space: nowrap;
    color: #2182d9;
`

type ContextPropsType = {
    path: string
    text: string
}

function Context(props:ContextPropsType) {
    return (
        <StyledContext href={props.path}>
            {props.text}
        </StyledContext>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div className="App">
        <Context path="https://hotmart.s3.amazonaws.com/product_pictures/ccdb08be-d4d5-467b-8491-a88bf61024bc/guiahtml38051.png" text="See Context" />
    </div>
);


// Что должно быть вместо XXX, YYY и ZZZ, чтобы код работал корректно?
// ❗ В ответе укажите значения через пробел: XXX YYY ZZZ
