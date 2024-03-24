import ReactDOM from 'react-dom/client';
import styled, { keyframes } from "styled-components";

const article = keyframes`
    to {
        width: 100%;
    }
`

const Business = styled.div`
    height: 50px;
    padding: 10px;
    max-width: 1200px;
    background-color: #e0e2e3;
    border-radius: 10px;
    padding: 10px;
`

const Appearance = styled.div`
    width: 0;
    height: 100%;
    border-radius: 5px;
    background-color: #6aade1;
    animation: ${article} 2s infinite :nth-child(even);

    &:hover {
        animation-play-state: paused;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div className="App">
        <Business>
            <Appearance />
        </Business>
    </div>
);


// Что должно быть вместо XXX, YYY и ZZZ, чтобы каждый нечетный повтор анимация проигрывалась в нормальном порядке, а каждый четный повтор в обратном. И при наведении курсора мыши на анимируемый элемент, анимация должна "замирать".
//❗ В ответе укажите значения через пробел: XXX YYY ZZZ