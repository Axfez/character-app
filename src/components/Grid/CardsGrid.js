import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { useSelector } from 'react-redux'

import {
  useFilterCharacterQuery,
  useGetCharacterQuery,
} from '../../services/characterApi'
import { CharacterCard } from '../CharacterCard/CharacterCard'
import { Footer } from '../Pagination/Footer'

export const CardsGrid = () => {
  const drawerWidth = 190
  const { data } = useGetCharacterQuery()
  const { searchName, status, gender, page } = useSelector(
    state => state?.character
  )
  const { data: dataFiltered, isError } =
    useFilterCharacterQuery({ searchName, status, gender, page }) || {}

  let content
  let footContent

  if (isError) {
    content = <div>No Characters Found!</div>
  }

  if (!isError && data?.results?.length > 0) {
    content =
      searchName === '' && status === '' && gender === '' && page === 1
        ? data?.results?.map(character => {
            return <CharacterCard character={character} key={character?.id} />
          })
        : dataFiltered?.results?.length > 0 &&
          dataFiltered?.results?.map(character => {
            return <CharacterCard character={character} key={character?.id} />
          })
  }

  if (!isError) {
    footContent =
      searchName === '' && status === '' && gender === '' ? (
        <Footer pages={data?.info.pages} />
      ) : (
        <Footer pages={dataFiltered?.info.pages} />
      )
  }

  return (
    <Box sx={{ ml: { sm: `${drawerWidth}px` }, flexGrow: 1, mt: 13 }}>
      <Grid container spacing={3} justifyContent={'center'}>
        {content}
        {footContent}
      </Grid>
    </Box>
  )
}
