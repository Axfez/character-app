import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const characterApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: builder => ({
    getCharacter: builder.query({
      query: () => '/character',
    }),
    filterCharacter: builder.query({
      query: ({ searchName, status, gender, page }) => {
        return {
          url: `/character/?name=${searchName}&status=${status}&gender=${gender}&page=${page}`,
        }
      },
    }),
    getCharacterById: builder.query({
      query: id => `/character/${id}`,
    }),
    getEpisodes: builder.query({
      query: id => `/character/${id}`,
      transformResponse: response => {
        const { episode } = response
        const characterEpisodes = episode.map(episodeUrl =>
          episodeUrl.split('/').pop()
        )
        return characterEpisodes
      },
    }),
    getEpisodesInfo: builder.query({
      query: epId => `/episode/[${epId}]`,
    }),
  }),
})

export const {
  useGetCharacterQuery,
  useFilterCharacterQuery,
  useGetCharacterByIdQuery,
  useGetEpisodesQuery,
  useGetEpisodesInfoQuery,
} = characterApi
