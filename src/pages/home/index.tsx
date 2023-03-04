import Content from "../../components/content"
import ImageHome from "../../assets/image-home.svg"
import Button from "../../components/button"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    return (
        <Content 
            border={false}
            title="Boas vindas a Lacrei Saúde"
            text="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
            buttonOne={
                <Button primary label="Pessoa Usuária" 
                onClick={() => navigate("/pessoa-usuaria")}
                />}
            buttonTwo={
                <Button secondary label="Profissional"
                onClick={() => navigate("/profissional")}
                />}
            image={ImageHome}
        />
    )
}

export default Home