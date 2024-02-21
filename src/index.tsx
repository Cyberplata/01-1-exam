import styled from "styled-components";
import ReactDOM from 'react-dom/client';

const StyledBird = styled.button`
    font-weight: 700;
    background-color: #5379ed;
    color: #fff;
    border-radius: 4px;
    width: 250px;
    height: 40px;
    border: none;

    @media (min-width: 576px) and (max-width: 768px) {
        width: 100%;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div className="App">
        <StyledBird>c#</StyledBird>
    </div>
);

// Что должно быть вместо XXX, YYY и ZZZ, чтобы ширина элемента стала 100% на разрешении в промежутке от 576px до 768px?
// ❗ В ответе укажите значения через пробел, вот так: XXX YYY ZZZ