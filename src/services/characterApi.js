import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const characterApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: builder => ({
    getCharacter: builder.query({
      query: ({ searchName, status, gender, page }) => {
        let url = '/character'
        if (searchName || status || gender || page) {
          url += '?'
          if (searchName) url += `name=${searchName}&`
          if (status) url += `status=${status}&`
          if (gender) url += `gender=${gender}&`
          if (page) url += `page=${page}`
        }
        return { url }
      },
    }),

    getCharacterById: builder.query({
      query: id => `/character/${id}`,
      transformResponse: response => {
        const { episode } = response
        const epId = episode.map(episodeUrl => episodeUrl.split('/').pop())
        return { ...response, episode: epId }
      }
    }),

    getEpisodesInfo: builder.query({
      query: epId => `/episode/[${epId}]`,
    }),
  }),
})

export const {
  useGetCharacterQuery,
  useGetCharacterByIdQuery,
  useGetEpisodesInfoQuery,
} = characterApi
