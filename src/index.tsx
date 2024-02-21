import ReactDOM from 'react-dom/client';
import styled from "styled-components";


type BirdPropsType = {
    children: string
    href?: string
};

const StyledBird = styled.button<BirdPropsType>`
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
    white-space: nowrap;
    color: #11be5f;
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div className="App">
        <StyledBird>ControlButton</StyledBird>

        <StyledBird  as="a" href="#">ControlLink</StyledBird>
    </div>
);


// Что должно быть вместо XXX, YYY и ZZZ, чтобы этот же стилизованный компонент отрисовался как ссылка (тег <a>)?
// ❗ В ответе укажите значения через пробел: XXX YYY ZZZ