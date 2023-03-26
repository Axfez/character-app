import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import { CardsGrid } from '../components/Grid/CardsGrid'
import { Navbar } from '../components/Navbar/Navbar'
import { ScrollTop } from '../utils/ScrollTop'

export const Home = () => {
  return (
    <>
      <Navbar />
      <CardsGrid />
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}
