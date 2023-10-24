import {Button as MaterialButton} from "@material-ui/core";

export interface ButtonProps {
    size: "small" | "medium" | "large";
    variant: "text" | "outlined" | "contained";
    text:string;
    color: "inherit" | "primary" | "secondary" | "default";
    children: React.ReactNode;
}

const Button = ({size, variant, color, children}: ButtonProps) => {
    return (
        <MaterialButton size={size} variant={variant} color={color}>
            {children}
        </MaterialButton>
    )
}

export default Button
