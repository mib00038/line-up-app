import { Tab, Tabs } from "grommet";
import PerformanceList from "./PerformanceList";
import React from "react";
import EventInfo from "./EventInfo";

const TabsNavigation = () => {
  return (
    <Tabs>
      <Tab title="performance">
        <PerformanceList performanceId={21813} />
      </Tab>
      <Tab title="event info">
        <EventInfo eventId={151} />
      </Tab>
    </Tabs>
  );
};

export default TabsNavigation;
