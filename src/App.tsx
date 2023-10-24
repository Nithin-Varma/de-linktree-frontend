import { Topbar } from "./components/Editor/Topbar";
import Card from "./components/User/card";
import { SettingsPanel } from "./components/Editor/SettingsPanel";
import { Toolbox } from "./components/Editor/Toolbox";
import Container from "./components/User/Container";
import CustomButton from "./components/User/Button";
import Text from "./components/User/text";
import { Editor, Frame } from "@craftjs/core";
import { Box, Grid, GridItem, Heading, Button } from "@chakra-ui/react";

const App = () => {
  return (
    <Box>
      <Heading as="h5" textAlign="center">A super simple page editor</Heading>
      
      <Editor resolver={{Card, CustomButton, Text, Container}}> 
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <Topbar/>
          <GridItem colSpan={9}>
            {/* <Frame> */}
              <Container padding={5} background="red">
                <Card background="" />
                <Button size="sm" variant="outline">Click</Button>
                <Text text="Hello World" fontSize={0} />
                <Container padding={6} background="red">
                  <Text text={"second hello world"} fontSize={1}/>
                </Container>
              </Container>
            {/* </Frame> */}
          </GridItem>
          
          <GridItem colSpan={3}>
            <Box>
                <Toolbox />
                <SettingsPanel />
            </Box>          
          </GridItem>
        </Grid>
      </Editor>
    </Box>
  );
}

export default App


// const App = () => {
//   return (
//     <h1>Hello</h1>
//   )
// }

// export default App