import React from "react";
import { Box, Text } from "grommet";
import styled from "styled-components";
import { Adjuster, Pricing } from "../app/services/performanceApi";
import { OrganisationCurrency } from "../app/services/eventApi";
import { TicketOrders } from "../app/slices/basketSlice";
import BasketControls from "./BasketControls";

interface PerformanceTicketOptionProps {
  variantId: number;
  priceBandId: number;
  title: string;
  priceBandName: string;
  priceBandDescription?: string;
  price?: Pricing;
  organisation: OrganisationCurrency;
  adjusters: Adjuster[];
  variantDescription?: string;
  basket: TicketOrders;
  atCapacity: boolean;
}

const PerformanceTicketOption = ({
  variantId,
  priceBandId,
  title,
  priceBandName,
  priceBandDescription,
  price,
  organisation,
  adjusters,
  variantDescription,
  basket,
  atCapacity,
}: PerformanceTicketOptionProps) => {
  const ticketTitle = `${priceBandName} - ${title}`;
  const currency = organisation.currency === "GBP" ? "£" : "";
  const feeAdjustment = adjusters.reduce(
    (totalFee, adjuster) => totalFee + adjuster.price.value,
    0,
  );
  const ticketOrder = basket.find(
    (order) =>
      order.variantId === variantId && order.priceBandId === priceBandId,
  );
  const ticketCount = ticketOrder?.ticketCount;

  return (
    <StyledListItem>
      <Box direction="row" flex justify="between">
        <Box direction="row" gap="medium">
          <Box>
            <Text size="small" color="text-strong" weight="bold">
              {ticketTitle}
            </Text>
            <Box>
              {priceBandDescription && (
                <Text size="xsmall">{priceBandDescription}</Text>
              )}
              {variantDescription && (
                <Text size="xsmall">{variantDescription}</Text>
              )}
            </Box>
          </Box>
        </Box>
        <Box direction="row" align="center">
          <Box margin={{ right: "xlarge" }}>
            <Text
              size="small"
              color="text-strong"
              weight="normal"
              textAlign="end"
            >
              {currency + price?.value.toFixed(2)}
            </Text>
            <Text size="xsmall" color="text-strong" weight="normal">
              {`(+ ${currency}${feeAdjustment.toFixed(2)} fee)`}
            </Text>
          </Box>
          <BasketControls
            ticketCount={ticketCount}
            variantId={variantId}
            priceBandId={priceBandId}
            atCapacity={atCapacity}
          />
        </Box>
      </Box>
    </StyledListItem>
  );
};

const StyledListItem = styled("li")({
  borderBottom: "1px solid #e9e9e9",
  padding: "0.5rem 0",
  width: "100%",
});

export default PerformanceTicketOption;
