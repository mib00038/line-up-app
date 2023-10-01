import React, { memo } from "react";
import {
  PricingBandWithVariants,
  PricingVariant,
} from "../app/services/performanceApi";
import PerformanceTicketOption from "./PerformanceTicketOption";
import { useEventQuery } from "../app/services/eventApi";
import { TicketOrders } from "../app/slices/basketSlice";

interface PerformancePriceBandVariantsProps {
  priceBand: PricingBandWithVariants;
  basket: TicketOrders;
  eventId: number;
  capacityRemaining: number;
}

const PerformancePriceBandVariants = ({
  priceBand,
  basket,
  eventId,
  capacityRemaining,
}: PerformancePriceBandVariantsProps) => {
  // const { priceBand } = price;
  const { isLoading: isEventLoading, data: event }: any = useEventQuery({
    eventId,
  });

  const bandTicketOrderCount = basket.reduce(
    (total, order) =>
      order.priceBandId === priceBand.id ? total + order.ticketCount : total,
    0,
  );

  const atCapacity = bandTicketOrderCount > capacityRemaining;

  return isEventLoading ? null : (
    <>
      {priceBand?.variants?.map((variant: PricingVariant) => {
        return (
          <PerformanceTicketOption
            key={variant.id}
            variantId={variant.id}
            priceBandId={priceBand.id}
            title={variant.name}
            priceBandName={priceBand.name}
            priceBandDescription={priceBand.description}
            variantDescription={variant.description}
            adjusters={variant.adjusters}
            price={variant.price}
            organisation={event.organisation}
            basket={basket}
            atCapacity={atCapacity}
          />
        );
      })}
    </>
  );
};

export default memo(PerformancePriceBandVariants);
