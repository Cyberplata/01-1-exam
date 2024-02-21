import ReactDOM from 'react-dom/client';
import styled, { css } from "styled-components";


const StyledBonus = styled.button<AccountPropsType>`
    padding: 8px 16px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;

    ${(props) =>
            props.accountType === "primary" &&
            css`
      color: #ffffff;
      background-color: #2182d9;
    `}

    ${(props) =>
            props.accountType === "secondary" &&
            css`
      background-color: transparent;
      color: #2182d9;
      border: 2px solid #2182d9;
      &:hover {
        background-color: #2182d9;
        color: #ffffff;
      }
    `}
`;

type AccountPropsType = {
    accountType?: "primary" | "secondary"
    disabled?: boolean
};

function Account(props: AccountPropsType) {
    const { accountType, disabled} = props;
    return (
        <StyledBonus accountType={accountType} disabled={disabled}>
            Cat
        </StyledBonus>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div className="App">
        <Account accountType="secondary" />
    </div>
);


// Что должно быть вместо XXX и YYY, чтобы код работал корректно?
// ❗ В ответе укажите значения через пробел, вот так: XXX YYY