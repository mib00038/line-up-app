import { RootState, useAppSelector } from "../app/store";
import { useEventQuery } from "../app/services/eventApi";
import {
  PricingMap,
  usePerformanceQuery,
} from "../app/services/performanceApi";
import PerformancePriceBandVariants from "./PerformancePriceBandVariants";
import React from "react";
import styled from "styled-components";

const PerformanceList = () => {
  const basket = useAppSelector((state: RootState) => state.basket);
  const { isLoading: isEventLoading, data: event }: any = useEventQuery({
    eventId: 151,
  });
  const { isLoading: isPerformanceLoading, data: performance }: any =
    usePerformanceQuery({ performanceId: 21813 });

  if (isPerformanceLoading || isEventLoading) {
    return null;
  }

  if (performance.eventId !== event.id) {
    console.warn(
      `performance.eventId (${performance.eventId}) and event.id (${event.id}) mismatch`,
    );
  }

  return (
    <StyledList>
      {performance?.pricing?.map((price: PricingMap) => {
        return (
          <PerformancePriceBandVariants
            key={price.id}
            price={price}
            organisation={event.organisation}
            basket={basket}
          />
        );
      })}
    </StyledList>
  );
};

const StyledList = styled("ul")({
  listStyle: "none",
  width: "100%",
  padding: 0,
});

export default PerformanceList;
