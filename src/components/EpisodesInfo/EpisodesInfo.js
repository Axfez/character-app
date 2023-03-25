import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useState } from 'react'
import Typography from '@mui/material/Typography'

export const EpisodesInfo = ({ episode }) => {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const episodeTab = episode?.map(episode => (
    <Tab label={`Ep. ${episode?.id}`} value={episode?.id} key={episode?.id} />
  ))

  const episodeInfo = episode?.map(episode => (
    <TabPanel value={episode?.id} key={episode?.id}>
      <Typography>Episode Name: {episode?.name}</Typography>
      <Typography>Air date: {episode?.air_date}</Typography>
      <Typography>Season: {episode?.episode}</Typography>
      <Typography>Created: {episode?.created.slice(0, 10)}</Typography>
    </TabPanel>
  ))

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>{episodeTab}</TabList>
        </Box>
        {episodeInfo}
      </TabContext>
    </Box>
  )
}
