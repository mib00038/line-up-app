import React from "react";
import styled from "styled-components";
import { RootState, useAppSelector } from "../app/store";
import { usePerformanceQuery } from "../app/services/performanceApi";
import PerformancePricingBands from "./PerformancePricingBands";
import { Box, Spinner } from "grommet";

interface PerformanceListProps {
  performanceId: number;
}

const PerformanceList = ({ performanceId }: PerformanceListProps) => {
  const { isLoading, data: performance }: any = usePerformanceQuery({
    performanceId,
  });
  const basket = useAppSelector((state: RootState) => state.basket);

  console.log({ performance });

  return isLoading || performance === undefined ? (
    <PerformanceListSpinner />
  ) : (
    <StyledList>
      <PerformancePricingBands
        pricing={performance.pricing}
        eventId={performance.eventId}
        basket={basket}
      />
    </StyledList>
  );
};

const PerformanceListSpinner = () => (
  <Box justify="center" direction="row" pad={{ top: "xlarge" }} width="100%">
    <StyledSpinner size="large" color={"#161e5b"} />
  </Box>
);

const StyledSpinner = styled(Spinner)({
  borderWidth: 2,
  animationDuration: "0.5s",
});

const StyledList = styled("ul")({
  listStyle: "none",
  width: "100%",
  padding: 0,
});

export default PerformanceList;
