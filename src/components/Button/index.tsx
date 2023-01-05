import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isDisabled }: IButtonProps) => {
  return (
    isDisabled === true ?
    <ButtonContainer onClick={onClick} >{title}</ButtonContainer>
    :
    <ButtonContainer onClick={onClick} disabled >{title}</ButtonContainer>
  )
};

export default Button;
