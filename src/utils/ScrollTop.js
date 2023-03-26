import { Box } from '@mui/material'
import Fade from '@mui/material/Fade'
import useScrollTrigger from '@mui/material/useScrollTrigger'

export const ScrollTop = props => {
  const { children } = props
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  })
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  )
}
