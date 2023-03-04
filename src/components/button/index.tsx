import { BtnPrimary, BtnSecondary } from "./styles";

interface Props {
    primary?: boolean;
    secondary?: boolean;
    label: string;
    onClick?: () => void;
}

const Button = ({ primary, secondary, label, onClick }: Props) => {
    return (
        <>
        {primary && <BtnPrimary onClick={onClick}>{label}</BtnPrimary>}
        {secondary && <BtnSecondary onClick={onClick}>{label}</BtnSecondary>}
        </>
    )
}

export default Button