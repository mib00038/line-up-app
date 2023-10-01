import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { performanceApi, PricingMap } from "../services/performanceApi";

export interface TicketOrder {
  priceBandId: number;
  variantId: number;
  ticketCount: number;
}

export type TicketOrders = TicketOrder[];

const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    incrementTicketOrderCount: (draft: Draft<TicketOrders>, action) => {
      const { priceBandId, variantId }: TicketOrder = action.payload;
      draft.forEach((order: Draft<TicketOrder>) => {
        order.priceBandId === priceBandId &&
          order.variantId === variantId &&
          order.ticketCount++;
      });
    },
    decrementTicketOrderCount: (draft: Draft<TicketOrders>, action) => {
      console.log(action.type);
      const { priceBandId, variantId }: TicketOrder = action.payload;
      draft.forEach((order: Draft<TicketOrder>) => {
        order.priceBandId === priceBandId &&
          order.variantId === variantId &&
          order.ticketCount--;
      });
    },
  },
  extraReducers: (builder) => {
    // initialise basket with result of fulfilled performance query
    builder.addMatcher(
      performanceApi.endpoints.performance.matchFulfilled,
      (draft: Draft<TicketOrders>, action: PayloadAction<any>) => {
        action.payload.pricing.forEach((priceMap: PricingMap) => {
          priceMap.priceBand.variants.forEach((variant) => {
            draft.push({
              priceBandId: priceMap.priceBand.id,
              variantId: variant.id,
              ticketCount: 0,
            });
          });
        });
      },
    );
  },
});

export const basketSliceActions = basketSlice.actions;
export default basketSlice;
