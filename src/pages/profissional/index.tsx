import Content from "../../components/content"
import ImagemProfissinal from "../../assets/imagem-profissional.svg"

const Profissional = () => {
    return (
        <Content 
            border={true}
            title="Profissional"
            text="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
            image={ImagemProfissinal}
        />
    )
}

export default Profissional