import { Box, Switch, Grid, Button } from "@chakra-ui/react";

export const Topbar = () => {
  return (
    <Box px={1} py={1} mt={3} mb={1} bg="#cbe8e7">
      <Grid templateColumns="1fr auto" alignItems="center" gap={6}>
        <Box gridColumn="1">
          <Switch colorScheme="teal" defaultChecked={true} size="sm" mr={2}/> 
          Enable
        </Box>
        <Box gridColumn="2">
          <Button size="sm" variant="outline" colorScheme="red">Serialize JSON to console</Button>
        </Box>
      </Grid>
    </Box>
  )
};
