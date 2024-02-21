import styled from "styled-components";
import ReactDOM from 'react-dom/client';

const StyledBreath = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    @media screen and (max-width: 768px) {
        gap: 20px;
    }
`

const StyledChampionship = styled.div`
    padding: 20px;
    background-color: #8ab2ea;
    color: #fff
`

function Camera() {
    return (
        <StyledBreath>
            <StyledChampionship>Svetlana</StyledChampionship>
            <StyledChampionship>Artem</StyledChampionship>
            <StyledChampionship>Maria</StyledChampionship>
            <StyledChampionship>Maxim</StyledChampionship>
        </StyledBreath>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div className="App">
        <Camera />
    </div>
);

// Что должно быть вместо XXX, чтобы на экранах меньше 768px отступы между ячейками стали 20px?