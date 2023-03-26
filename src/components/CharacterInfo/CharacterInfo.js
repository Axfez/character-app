import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import {
  useGetCharacterByIdQuery,
  useGetEpisodesInfoQuery,
  useGetEpisodesQuery,
} from '../../services/characterApi'
import { EpisodesInfo } from '../EpisodesInfo/EpisodesInfo'

export const CharacterInfo = ({ id }) => {
  const { data: character } = useGetCharacterByIdQuery(id)
  const { data: epId } = useGetEpisodesQuery(id)
  const { data: episode } = useGetEpisodesInfoQuery(epId || [], { skip: !epId })

  let type
  if (character?.type === '') {
    type = 'N/A'
  } else {
    type = `${character?.type}`
  }

  return (
    <Box mt={10} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 900 }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: 800,
          }}
        >
          <Box>
            <CardContent>
              <CardMedia
                component="img"
                height="440"
                image={character?.image}
                alt={character?.name}
              />
            </CardContent>
          </Box>
          <Box>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
              }}
            >
              <Typography variant="h4">{character?.name}</Typography>
              <Typography>Status: {character?.status}</Typography>
              <Typography>Species: {character?.species}</Typography>
              <Typography>Type: {type}</Typography>
              <Typography>Gender: {character?.gender}</Typography>
              <Typography>Origin: {character?.origin?.name}</Typography>
              <Typography>
                Current Location: {character?.location?.name}
              </Typography>
              <Typography>
                Created: {character?.created.slice(0, 10)}
              </Typography>
            </CardContent>
          </Box>
        </CardContent>
        <EpisodesInfo episode={episode} />
      </Card>
    </Box>
  )
}
