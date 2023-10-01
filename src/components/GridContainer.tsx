import React from "react";
import { Box, Grid } from "grommet";
import TabsNavigation from "./TabsNavigation";

const GridContainer = () => {
  return (
    <Box width="100%">
      <Grid pad="small" gap="none">
        <TabsNavigation />
      </Grid>
    </Box>
  );
};

export default GridContainer;
