import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export const CharacterCard = ({ character }) => {
  return (
    <Grid
      item
      sx={{ maxWidth: 425, minWidth: 425 }}
      xs={12}
      sm={6}
      md={2}
      key={character.id}
    >
      <Link to="/details/" state={{ id: character.id }}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image={character.image}
              alt={character.name}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="subtitle1" color="ActiveCaption">
                Status
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {character.status}
              </Typography>
              <Typography variant="subtitle1" color="ActiveCaption">
                Species
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {character.species}
              </Typography>
              <Typography variant="subtitle1" color="ActiveCaption">
                Gender
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {character.gender}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  )
}
