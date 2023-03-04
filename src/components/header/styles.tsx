import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    background-color: #EEE;
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: .8rem;

    @media (max-width: 650px) {
        flex-direction: column;
        justify-content: center;
        gap: 1.2rem;
    }
`

export const Logo = styled.h1`
    color: var(--green);
    font-size: 3.2rem;
    font-weight: 700;
    cursor: pointer;
`

export const Menu = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4rem;
`

export const Nav = styled.button`
    outline: none;
    border: none;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--black);
    transition: var(--transition);

    &:hover {
        color: var(--green);
        cursor: pointer;
    }

    @media (max-width: 450px) {
        font-size: 1.2rem;
    }
`