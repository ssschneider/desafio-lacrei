import Content from "../../components/content"
import ImageUsuario from "../../assets/imagem-usuario.svg"

const Usuario = () => {
    return (
        <Content 
            border={true}
            title="Pessoa Usuária"
            text="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
            image={ImageUsuario}
        />
    )
}

export default Usuario