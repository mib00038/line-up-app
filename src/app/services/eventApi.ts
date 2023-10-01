import { baseApi } from './baseApi';

export const Event = 'event';

interface EventQuery {
  eventId: number;
}

export interface OrganisationCurrency {
  id: number;
  currency: string;
}

interface EventImage {
  id: number;
  url: string;
}

interface EventAddress {
  id: number;
  street?: string;
  city?: string;
  town?: string;
  postcode?: string;
  country?: string;
}

interface EventVenue {
  id: number;
  name: string;
  lat?: number;
  lng?: number;
  address: EventAddress;
}

interface EventTag {
  id: number;
  name?: string;
}

export interface EventType {
  id: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  name: string;
  shortDescription?: string;
  bookingInformation?: string;
  runTime?: string;
  hasInterval?: boolean;
  intervalTime?: string;
  externalId?: string;
  venueId?: number;
  imageId?: number;
  image?: EventImage;
  venue?: EventVenue;
  tags?: EventTag[];
  notes?: string;
  description?: string;
  organisation: OrganisationCurrency;
}

const eventApi = baseApi
  .enhanceEndpoints({addTagTypes: [Event]})
  .injectEndpoints({
    endpoints: (builder) => ({
      event: builder.query({
        query: ({eventId} : EventQuery) => ({ url: `event/${eventId}/` }),
        transformResponse: (response: any) : EventType => response.data,
        // providesTags: ({data: {results}}) => results ? results.map(({id}) => ({type: Comics, id})) : [Comics]
      }),
    }),
    overrideExisting: false,
  });

export const { useEventQuery } = eventApi;