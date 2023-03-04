import styled from "styled-components";

export const BtnPrimary = styled.button`
    color: #fff;
    background-color: var(--green);
    padding: 1.2rem 3.2rem;
    border-radius: .8rem;
    border: none;
    outline: none;
    width: 19.2rem;
    font-size: 1.8rem;
    font-weight: 700;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.251);
    transition: var(--transition);

    &:hover {
        cursor: pointer;
        scale: 1.05;
    }

    @media (max-width: 520px) {
        font-size: 1.2rem;
    }

    @media (max-width: 500px) {
        font-size: 1.8rem;
    }

    @media (max-width: 375px) {
        font-size: 1.4rem;
    }
`

export const BtnSecondary = styled.button`
    color: var(--green);
    background-color: #fff;
    border: 2px solid var(--green);
    font-size: 1.8rem;
    outline: none;
    width: 19.2rem;
    font-weight: 700;
    padding: 1.2rem 3.2rem;
    border-radius: .8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.251);
    transition: var(--transition);

    &:hover {
        cursor: pointer;
        scale: 1.05;
    }

    @media (max-width: 520px) {
        font-size: 1.2rem;
    }

    @media (max-width: 500px) {
        font-size: 1.8rem;
    }

    @media (max-width: 375px) {
        font-size: 1.4rem;
    }
`