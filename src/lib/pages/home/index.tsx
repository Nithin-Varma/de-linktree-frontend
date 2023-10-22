// import { Grid } from "@chakra-ui/react";

// import CTASection from "./components/CTASection";
// import SomeImage from "./components/SomeImage";
// import SomeText from "./components/SomeText";

// const Home = () => {
//   return (
//     // <Grid gap={4}>
//     //   <SomeText />
//     //   <SomeImage />
//     //   <CTASection />
//     // </Grid>

//   );
// };

// export default Home;

import { BuilderComponent, builder } from "@builder.io/react";

// Use your Builder.io public API Key
const builderAPIKey = "25475952972f4b7ba74c484f0cb22b2b";

builder.init(builderAPIKey);

export function MyComponent() {
  return <BuilderComponent model="page" />;
}
