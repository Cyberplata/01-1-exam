import ReactDOM from 'react-dom/client';
import styled from 'styled-components';


const Camera = XXX.YYY`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;

function Box() {
    return (
        <Camera>Affair</Camera>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div className="App">
        <Box />
    </div>
);



//Что должно быть вместо XXX и YYY, чтобы отобразился заголовок первого уровня?
//❗ В ответе укажите значения через пробел, вот так: XXX YYY
