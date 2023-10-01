import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

export const BASE_URL = 'https://api.line-up.tickets/api/';

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", 'Bearer ' + process.env.REACT_APP_AUTH_TOKEN);
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 5 });

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithRetry,
  // increase cache time to 300 seconds from the default of 60 seconds to demonstrate how to reduce re-fetching
  keepUnusedDataFor: 300,
  // we can also specify cache time on a per endpoint or use endpoint tags to re-fetch on a mutation request if required
  endpoints: () => ({}),
});