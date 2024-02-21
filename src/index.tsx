import ReactDOM from 'react-dom/client';
import styled, { css } from "styled-components";


const AnswerButton = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #2c73d1;
    cursor: pointer;
    padding: 15px;
    flex-grow: 1;
    font-size: 20px
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <AnswerButton title='Click me to say answer!'>Say Answer!</AnswerButton>
);

// Какой атрибут должен быть вместо XXX, чтобы при наведении курсора на элемент появлялась подсказка?