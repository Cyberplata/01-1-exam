import ReactDOM from 'react-dom/client';
import styled from 'styled-components';


const Advice = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;

function Ability() {
    return (
        <Advice>Business</Advice>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div className="App">
        <Ability />
    </div>
);



//Что должно быть вместо XXX и YYY, чтобы отобразился заголовок первого уровня?
//❗ В ответе укажите значения через пробел, вот так: XXX YYY
