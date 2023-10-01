import { baseApi } from "./baseApi";

export const Performance = "performance";

export interface PerformanceQuery {
  performanceId: string;
}

export interface PerformanceTag {
  id: number;
  name?: string;
}

export interface Pricing {
  id: number;
  value: number;
}

export interface Adjuster {
  id: number;
  name?: string;
  description?: string;
  external: boolean;
  rateType?: string; // example: "FIXED_RATE" (not exactly defined in api docs yet, possibly needs updating to an enum ?)
  rate: number;
  price: Pricing;
}

export interface PricingVariant {
  id: number;
  name: string;
  description?: string;
  price?: Pricing;
  adjusters: Adjuster[];
}

export interface PricingBandWithVariants {
  id: number;
  name: string;
  description?: string;
  color: string;
  variants: PricingVariant[];
}

export interface PricingMap {
  id: number;
  capacity: number;
  capacityRemaining: number;
  priceBand: PricingBandWithVariants;
}

export interface PerformanceType {
  id: number;
  eventId: number;
  startDate: Date | string;
  startTime: string;
  endDate?: Date | string;
  endTime?: string;
  tags?: PerformanceTag[];
  timeZone: string;
  pricing: PricingMap[];
  totalCapacity: number;
  totalCapacityRemaining: number;
  venuePlanId?: number;
}

export const performanceApi = baseApi
  .enhanceEndpoints({ addTagTypes: [Performance] })
  .injectEndpoints({
    endpoints: (builder: any) => ({
      performance: builder.query({
        query: ({ performanceId }: PerformanceQuery) => ({
          url: `performance/${performanceId}/`,
        }),
        transformResponse: (response: any): PerformanceType => response.data,
        // providesTags: ({data: {results}}) => results ? results.map(({id}) => ({type: Comics, id})) : [Performance]
      }),
    }),
    overrideExisting: false,
  });

export const { usePerformanceQuery } = performanceApi;
