import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export const Navback = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to="/">
          <Button variant="contained">Back</Button>
        </Link>
        <Typography variant="h6" noWrap>
          Rick&Morty
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
