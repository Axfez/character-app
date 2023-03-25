import { useDispatch, useSelector } from 'react-redux'
import { pageSelected } from '../../services/characterSlice'

import Pagination from '@mui/material/Pagination'
import Grid from '@mui/material/Grid'

export const Footer = ({ pages }) => {
  const { page } = useSelector(state => state?.character)

  const dispatch = useDispatch()

  const handleChangePage = (e, value) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    dispatch(pageSelected(value))
  }

  return (
    <Grid
      item
      sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}
      xs={12}
    >
      <Pagination
        count={pages}
        page={page}
        color="primary"
        onChange={handleChangePage}
      />
    </Grid>
  )
}
