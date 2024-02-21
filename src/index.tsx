import ReactDOM from 'react-dom/client';
import styled from 'styled-components';


const StyledCareer = styled.div`
    width: 100%;
    max-width: 900px;
    background-color: #009688;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    gap: 20px
`

const StyledAddress = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 5px;
    background-color: #fefefe;

    &:last-child {
        width: 100%;
    }
`

function Coast() {
    return (
        <StyledCareer>
            <StyledAddress/>
            <StyledAddress/>
            <StyledAddress/>
        </StyledCareer>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div className="App">
        <Coast />
    </div>
);


// В родительском элементе есть 3 дочерних элемента определенной ширины. Что должно быть вместо XXX и YYY, чтобы последний дочерний элемент занял все свободное пространство по горизонтали?