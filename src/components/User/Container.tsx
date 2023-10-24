import React from "react";
import { Box } from "@chakra-ui/react";

type ContainerProps = {
    background: string;
    padding?: number;
    children: React.ReactNode;
}

const Container = ({background, padding = 0, children}: ContainerProps) => {
  return (
    <Box style={{margin: "5px 0", background, padding: `${padding}px`}}>
      {children}
    </Box>
  )
}

export default Container;
