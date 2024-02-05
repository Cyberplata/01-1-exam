import ReactDOM from 'react-dom/client';
import styled from "styled-components";

const StyledApp = styled.div`
    color: white;
    display: grid;
    height: 100vh;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 60px 1fr 60px;
    grid-template-areas: 
    "h h"
    "s c"
    "f f"
`
const StyledHeader = styled.header`
    background-color: #5555ef;
    padding: 20px;
    display: flex;
    align-items: center;
    grid-area: h;

    a {
        color: white
    }
`
const StyledContent = styled.section`
    color: #1f1d1d;
    padding: 020px;
    grid-area: c
    
`
const StyledSidebar = styled.section`
    border-right: 1px solid silver;
    color: #1f1d1d;
    grid-area: s;
    
`
const StyledFooter = styled.footer`
    background-color: #5555ef;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: f;
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StyledApp>
        <StyledHeader>
            <a href="#">appointment-logo</a>
        </StyledHeader>
        <StyledSidebar>
            <nav>
                <ul>
                    <li><a href="">amount</a></li>
                    <li><a href="">analysis</a></li>
                    <li><a href="">courage</a></li>
                    <li><a href="">car</a></li>
                </ul>
            </nav>
        </StyledSidebar>
        <StyledContent>
            <h1>
                airport
            </h1>
        </StyledContent>
        <StyledFooter>©access</StyledFooter>
    </StyledApp>
);

// Что должно быть вместо XXX, YYY и ZZZ, чтобы разметка была семантическая?
// ❗ В ответе укажите значения через пробел, вот так: XXX YYY ZZZ