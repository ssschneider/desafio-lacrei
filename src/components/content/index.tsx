import { BtnNav, Image, Text, TextSection, TextBorder, Title, Wrapper } from "./styles"

interface Props {
    border: boolean;
    title: string;
    text: string;
    buttonOne?: any;
    buttonTwo?: any;
    image: any;
}

const Content = ({ border, title, text, buttonOne, buttonTwo, image }: Props) => {
    return (
        <Wrapper>
            {border ? 
                <TextSection>
                    <Title>{title}</Title>
                    <TextBorder>{text}</TextBorder>
                </TextSection> :
                <TextSection>
                    <Title>{title}</Title>
                    <Text>{text}</Text>
                    <BtnNav>
                        {buttonOne}
                        {buttonTwo}
                    </BtnNav>
                </TextSection>
            }
            <Image src={image}/>
        </Wrapper>
    )
}

export default Content