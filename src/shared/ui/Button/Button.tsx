import { ButtonHTMLAttributes, FC } from "react";
import "./style.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({text, ...otherProps}: Props) {
    return (
    <button {...otherProps}>
      {text}
    </button>
  );
}