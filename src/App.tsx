import { Topbar } from "./components/Editor/Topbar";
import Card from "./components/User/card";
import { SettingsPanel } from "./components/Editor/SettingsPanel";
import { Toolbox } from "./components/Editor/Toolbox";
import Container from "./components/User/Container";
// import Button from "./components/User/Button";
// import Text from "./components/User/text";
// import { Editor, Frame } from "@craftjs/core";
// import { Box, Grid, GridItem, Heading, Button } from "@chakra-ui/react";
import {Typography, Paper, Grid} from '@material-ui/core';



export default function App() {
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Grid container spacing={3} style={{paddingTop: "10px"}}>
        <Topbar />
        <Grid item xs>
          <Container padding={5} background="#eee">
            <Card background={""} size={"small"} variant={"text"} text={""} color={"inherit"} children={undefined} />
          </Container>
        </Grid>
        <Grid item xs={3}>
          <Paper>
              <Toolbox />
              <SettingsPanel />
          </Paper>          
        </Grid>
      </Grid>
    </div>
  );
}


// const App = () => {
//   return (
//     <h1>Hello</h1>
//   )
// }

// export default App