import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isDisabled }: IButtonProps) => <ButtonContainer onClick={onClick} disabled={isDisabled} >{title}</ButtonContainer>

export default Button;
