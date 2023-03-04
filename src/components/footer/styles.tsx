import styled from "styled-components";

export const Wrapper = styled.footer`
    width: 100%;
    max-width: 90%;
    margin: 6rem auto 0;
    border-top: 1px solid #B0E0D3;
    padding: 3.2rem 0 .8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.8rem;

    @media (max-width: 450px) {
        align-items: center;
    }
`

export const Menu = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4rem;

    @media (max-width: 450px) {
        gap: 2rem;
        align-items: center;
    }
`

export const Nav = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--black);
    transition: var(--transition);
    padding: 0 .5rem;

    &:hover {
        font-weight: 700;
        cursor: pointer;
    }
`

export const SocialMedia = styled.a`
    text-decoration: none;
    transition: var(--transition);
    font-size: 6rem;

    &:hover {
        scale: 1.05;
        cursor: pointer;
    }
`

export const FurtherInfo = styled.p`
    color: var(--text);
    font-size: 1.2rem;
`