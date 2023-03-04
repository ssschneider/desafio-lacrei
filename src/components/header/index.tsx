import { useNavigate } from "react-router-dom"
import { Container, Logo, Menu, Nav, Wrapper } from "./styles"

const Header = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <Wrapper>
                <Logo onClick={() => navigate("/")}>Lacrei</Logo>

                <Menu>
                    <Nav onClick={() => navigate("/")}>Home</Nav>
                    <Nav onClick={() => navigate("/pessoa-usuaria")}>Pessoa Usuária</Nav>
                    <Nav onClick={() => navigate("/profissional")}>Profissional</Nav>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Header