import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    max-width: 90%;
    margin: 6.4rem auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    @media (max-width: 1050px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3.2rem;
    max-width: 45.3rem;

    @media (max-width: 520px) {
        max-width: 40rem;
    }

    @media (max-width: 320px) {
        max-width: 30rem;
    }
`

export const Title = styled.h2`
    font-size: var(--text-big);
    font-weight: 700;

    @media (max-width: 520px) {
        font-size: 4rem;
    }

    @media (max-width: 375px) {
        font-size: var(--text-medium);
    }
`

export const Text = styled.p`
    font-size: var(--text-medium);
    color: var(--text);

    @media (max-width: 520px) {
        font-size: 1.8rem;
    }

    @media (max-width: 375px) {
        font-size: 1.8rem;
    }
`

export const TextBorder = styled.p`
    font-size: var(--text-medium);
    color: var(--text);
    padding-left: 2.4rem;
    border-left: 5px solid var(--green);

    @media (max-width: 520px) {
        font-size: 1.8rem;
    }

    @media (max-width: 375px) {
        font-size: 1.8rem;
    }
`

export const BtnNav = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
        flex-direction: column;
        gap: 3.2rem;
        align-items: flex-start;
    }
`

export const Image = styled.img`
    max-width: 50rem;

    @media (max-width: 520px) {
        max-width: 44rem;
    }

    @media (max-width: 460px) {
        max-width: 35rem;
    }

    @media (max-width: 370px) {
        max-width: 30rem;
    }
`