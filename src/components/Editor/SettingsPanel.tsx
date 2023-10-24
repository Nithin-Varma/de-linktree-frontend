// import { Box, Grid, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button } from "@chakra-ui/react";

// export const SettingsPanel = () => {  
//   return  (    
//     <Box bg="gray.50" mt={2} px={2} py={2}>
//       <Grid templateColumns="1fr" gap={6}>
//         <Box pb={2}>
//           <Grid templateColumns="1fr auto" alignItems="center" gap={6}>
//             <Box gridColumn="1">
//               <Text fontSize="sm">Selected</Text>
//             </Box>
//             <Box gridColumn="2">
//               <Box bg="blue.500" color="white" borderRadius="sm" px={2} py={1} fontSize="xs">Selected</Box>
//             </Box>
//           </Grid>
//         </Box>
//         <Box>
//           <Text fontSize="sm" mb={2}>Prop</Text>
//           <Slider defaultValue={0} step={1} min={7} max={50}>
//             <SliderTrack bg="red.100">
//               <SliderFilledTrack bg="tomato" />
//             </SliderTrack>
//             <SliderThumb boxSize={6} />
//           </Slider>
//         </Box>
//         <Button colorScheme="gray">
//           Delete
//         </Button>
//       </Grid>
//     </Box>
//   ) 
// }


// components/SettingsPanel.js
import { Box, Chip, Grid, Typography, Button as MaterialButton, FormControl, FormLabel, Slider } from "@material-ui/core";

export const SettingsPanel = () => {  
  return  (    
    <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
      <Grid container direction="column" spacing={0}>
        <Grid item>
          <Box pb={2}>
            <Grid container alignItems="center">
              <Grid item xs><Typography variant="subtitle1">Selected</Typography></Grid>
              <Grid item><Chip size="small" color="primary" label="Selected" /></Grid>
            </Grid>
          </Box>
        </Grid>
        <FormControl size="small" component="fieldset">
          <FormLabel component="legend">Prop</FormLabel>
          <Slider
            defaultValue={0}
            step={1}
            min={7}
            max={50}
            valueLabelDisplay="auto"
          />
        </FormControl>
        <MaterialButton
          variant="contained"
          color="default"
        >
          Delete
        </MaterialButton>
      </Grid>
    </Box>
  ) 
}