import { TabList } from '@mui/lab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

export const EpisodesInfo = ({ episodes }) => {
  const [value, setValue] = useState(1)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const episodeTab = episodes?.map(episode => (
    <Tab label={`Ep. ${episode?.id}`} value={episode?.id} key={episode?.id} />
  ))

  const episodeInfo = episodes?.map(episode => (
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
        <Tabs variant="scrollable" scrollButtons="auto" value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>{episodeTab}</TabList>
          </Box>
        </Tabs>
        {episodeInfo}
      </TabContext >

    </Box >
  )
}