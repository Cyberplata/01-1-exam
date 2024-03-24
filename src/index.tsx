import ReactDOM from 'react-dom/client';
import styled, { keyframes } from "styled-components";

const courage = keyframes`
    from {
        transform: rotate(90deg);
    }

    to {
        transform: rotate(450deg);
    }
`;

const Clock = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid;
  border-radius: 50%;
  position: relative;
`;

const Pin = styled.div`
  height: 2px; 
  position: absolute; 
  top: 50%; 
  transform-origin: 100% 50%; 
  width: 50%; 
  background-color: green; 
  animation: ${courage} 60s steps(60) infinite; 
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div className="App">
        <Clock>
            <Pin />
        </Clock>
    </div>
);


// Что должно быть вместо XXX и YYY, чтобы анимация для стрелки работала корректно? Стрелка должна "тикать" 1 раз в секунду и проходить весь круг за 60 секунд.
//❗ В ответе укажите значения через пробел, вот так: XXX YYY