import React  from "react";
import { Button } from "@chakra-ui/react";

interface CustomButtonProps {
    size: "sm" | "md" | "lg";
    variant: string;
    color: string;
    children: React.ReactNode;
}

const CustomButton = ({ size, variant, color, children }: CustomButtonProps) => {
    return (
        <Button size={size} variant={variant} color={color}>
            {children}
        </Button>
    );
};

export default CustomButton;