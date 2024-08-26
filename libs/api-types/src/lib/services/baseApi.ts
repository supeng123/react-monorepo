import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'

export const baseApiWithGraphql = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: 'http://localhost:3006/',
  }),
  endpoints: () => ({}),
})