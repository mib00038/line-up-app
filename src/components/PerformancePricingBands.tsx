import React from "react";
import { PricingMap } from "../app/services/performanceApi";
import { TicketOrders } from "../app/slices/basketSlice";
import PerformancePriceBandVariants from "./PerformancePriceBandVariants";

interface PerformancePricingBandsProps {
  pricing: PricingMap[];
  eventId: number;
  basket: TicketOrders;
}

const PerformancePricingBands = ({
  pricing,
  eventId,
  basket,
}: PerformancePricingBandsProps) => (
  <>
    {pricing?.map((price: PricingMap) => (
      <PerformancePriceBandVariants
        key={price.id}
        eventId={eventId}
        priceBand={price.priceBand}
        capacityRemaining={price.capacityRemaining}
        basket={basket}
      />
    ))}
  </>
);

export default PerformancePricingBands;
