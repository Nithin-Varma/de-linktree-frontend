// import { Box, Switch, Grid, Button } from "@chakra-ui/react";

// export const Topbar = () => {
//   return (
//     <Box px={1} py={1} mt={3} mb={1} bg="#cbe8e7">
//       <Grid templateColumns="1fr auto" alignItems="center" gap={6}>
//         <Box gridColumn="1">
//           <Switch colorScheme="teal" defaultChecked={true} size="sm" mr={2}/> 
//           Enable
//         </Box>
//         <Box gridColumn="2">
//           <Button size="sm" variant="outline" colorScheme="red">Serialize JSON to console</Button>
//         </Box>
//       </Grid>
//     </Box>
//   )
// };



import { Box, FormControlLabel, Switch, Grid, Button as MaterialButton } from "@material-ui/core";

export const Topbar = () => {
  return (
    <Box px={1} py={1} mt={3} mb={1} bgcolor="#cbe8e7">
      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={<Switch checked={true} />}
            label="Enable"
          />
        </Grid>
        <Grid item>
          <MaterialButton size="small" variant="outlined" color="secondary">Serialize JSON to console</MaterialButton>
        </Grid>
      </Grid>
    </Box>
  )
};