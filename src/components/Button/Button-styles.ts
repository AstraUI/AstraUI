import styled from "styled-components";
import { color, size, typography } from "styled-system";
import { ButtonProps } from "./Button-types";
import { ThemePrimaryColor } from "../../theme/Colors";

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: ${ThemePrimaryColor.default};
  color: ${ThemePrimaryColor.textLight};
  border-radius: 6px;

  ${(props) => (props.sx ? props.sx : "")}
  &:hover {
    ${(props) => (props._hover ? props._hover : null)}
  }
  &:focus {
    ${(props) => (props._focus ? props._focus : null)}
  }
  &:active {
    ${(props) => (props._active ? props._active : null)}
  }
  &:disabled {
    cursor: not-allowed;
    ${(props) => (props._disabled ? props._disabled : null)}
  }

  ${size}
  ${typography}
  ${color}
`;

export default StyledButton;
