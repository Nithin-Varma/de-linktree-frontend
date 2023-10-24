import { Box, Text, VStack, Button } from "@chakra-ui/react";

export const Toolbox = () => {
  return (
    <Box px={2} py={2}>
      <VStack
        direction="column"
        align="center"
        justify="center"
        spacing={1}
      >
        <Box pb={2}>
          <Text>Drag to add</Text>
        </Box>
        <VStack direction="column" spacing={3}>
          <Button colorScheme="teal" variant="solid">Button</Button>
          <Button colorScheme="teal" variant="solid">Text</Button>
          <Button colorScheme="teal" variant="solid">Container</Button>
          <Button colorScheme="teal" variant="solid">Card</Button>
        </VStack>
      </VStack>
    </Box>
  )
};
