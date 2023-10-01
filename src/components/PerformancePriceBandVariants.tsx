import React from "react";
import {PricingMap, PricingVariant} from "../app/services/performanceApi";
import PerformanceTicketOption from "./PerformanceTicketOption";
import {OrganisationCurrency} from "../app/services/eventApi";
import {TicketOrders} from "../app/slices/basketSlice";

interface PerformancePriceBandVariantsProps {
  price: PricingMap;
  organisation: OrganisationCurrency;
  basket: TicketOrders;
}

const PerformancePriceBandVariants = ({price, organisation, basket}: PerformancePriceBandVariantsProps) => {
  const { priceBand } = price;

  return (
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
            organisation={organisation}
            basket={basket}
          />
        )
      })}
    </>
  );
}

export default PerformancePriceBandVariants;
