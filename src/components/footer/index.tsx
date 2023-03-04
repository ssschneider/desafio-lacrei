import { useNavigate } from "react-router-dom";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { FurtherInfo, Menu, Nav, SocialMedia, Wrapper } from "./styles"

const Footer = () => {
    const navigate = useNavigate()

    return (
        <Wrapper>
            <Menu>
                    <Nav onClick={() => navigate("/")}>Home</Nav>
                    <Nav onClick={() => navigate("/pessoa-usuaria")}>Pessoa Usuária</Nav>
                    <Nav onClick={() => navigate("/profissional")}>Profissional</Nav>
            </Menu>

            <Menu>
                <SocialMedia href="https://www.facebook.com/lacrei.saude" target="_blank">
                    <FacebookLogo color="#018762"/>
                </SocialMedia>
                <SocialMedia href="https://www.instagram.com/lacrei.saude/" target="_blank">
                    <InstagramLogo color="#018762"/>
                </SocialMedia>
                <SocialMedia href="https://www.linkedin.com/company/lacrei/" target="_blank">
                    <LinkedinLogo color="#018762"/>
                </SocialMedia>
            </Menu>

            <FurtherInfo>Desafio Front-end Lacrei</FurtherInfo>
        </Wrapper>
    )
}

export default Footer