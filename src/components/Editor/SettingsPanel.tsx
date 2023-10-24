import { Box, Grid, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button } from "@chakra-ui/react";

export const SettingsPanel = () => {  
  return  (    
    <Box bg="gray.50" mt={2} px={2} py={2}>
      <Grid templateColumns="1fr" gap={6}>
        <Box pb={2}>
          <Grid templateColumns="1fr auto" alignItems="center" gap={6}>
            <Box gridColumn="1">
              <Text fontSize="sm">Selected</Text>
            </Box>
            <Box gridColumn="2">
              <Box bg="blue.500" color="white" borderRadius="sm" px={2} py={1} fontSize="xs">Selected</Box>
            </Box>
          </Grid>
        </Box>
        <Box>
          <Text fontSize="sm" mb={2}>Prop</Text>
          <Slider defaultValue={0} step={1} min={7} max={50}>
            <SliderTrack bg="red.100">
              <SliderFilledTrack bg="tomato" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </Box>
        <Button colorScheme="gray">
          Delete
        </Button>
      </Grid>
    </Box>
  ) 
}
