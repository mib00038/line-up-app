import React from "react";
import { Box, Grid, Tab, Tabs } from "grommet";
import PerformanceList from "./PerformanceList";

const GridContainer = () => {
  return (
    <Box width="100%">
      <Grid pad="small" gap="none">
        <TabsNavigation />
      </Grid>
    </Box>
  );
};

const TabsNavigation = () => {
  return (
    <Tabs>
      <Tab title="performance">
        <PerformanceList />
      </Tab>
      <Tab title="event info">
        <Box pad="medium">Two</Box>
      </Tab>
    </Tabs>
  );
};

export default GridContainer;
