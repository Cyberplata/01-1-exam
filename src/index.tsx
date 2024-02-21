import ReactDOM from 'react-dom/client';
import styled from 'styled-components';


const StyledBoss = styled.div`
    padding: 20px;
    border: 1px solid red;
    border-radius: 15px;
    display: flex;
    gap: 20px;
    align-items: flex-start;
    flex-direction: column-reverse;
`

const StyledAgreement = styled.div`
    padding: 50px;
    background-color: tomato;
    font-family: sans-serif;
    font-size: 20px;
    color: white;
    border-radius: 8px;
`

const BossComponent = () => {
    return (
        <StyledBoss>
            <StyledAgreement>Vladimir</StyledAgreement>
            <StyledAgreement>Lev</StyledAgreement>
            <StyledAgreement>Konstantin</StyledAgreement>
        </StyledBoss>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div className="App">
        <BossComponent />
    </div>
);


//Что должно быть вместо XXX и YYY, чтобы элементы расположились в столбец (сверху вниз) в обратном порядке?
//❗ В ответе укажите значения через пробел: XXX YYY