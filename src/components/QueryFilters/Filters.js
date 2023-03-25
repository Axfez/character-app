import CachedIcon from '@mui/icons-material/Cached'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  genderSelected,
  pageSelected,
  search,
  statusSelected,
} from '../../services/characterSlice'

export const Filters = () => {
  const [searchName, setSearchName] = useState('')
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    if (e.key === 'Enter' || e.type === 'click') {
      dispatch(search(searchName))
      dispatch(statusSelected(status))
      dispatch(genderSelected(gender))
      dispatch(pageSelected(1))
    }
  }

  const handleClear = () => {
    dispatch(search(''))
    dispatch(statusSelected(''))
    dispatch(genderSelected(''))
    dispatch(pageSelected(1))
  }

  const handleStatus = e => {
    e.preventDefault()
    setStatus(e.target.value)
  }

  const handleGender = e => {
    e.preventDefault()
    setGender(e.target.value)
  }

  const handleSearch = e => {
    e.preventDefault()
    setSearchName(e.target.value)
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          width: '150px',
          marginTop: '20px',
        }}
      >
        <SearchIcon sx={{ color: 'action.active', mx: 1, my: 0.5 }} />
        <Input
          placeholder="Search..."
          value={searchName}
          onChange={handleSearch}
          onKeyUp={handleSubmit}
        />
      </Box>
      <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
        <div>Status</div>
        <select onChange={handleStatus}>
          <option></option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </Box>
      <Box sx={{ marginTop: '15px', textAlign: 'center' }}>
        <div>Gender</div>
        <select onChange={handleGender}>
          <option></option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </Box>
      <Button
        variant="outlined"
        sx={{ width: '4px', marginTop: '20px', marginLeft: '65px' }}
        onClick={handleSubmit}
      >
        <SearchIcon />
      </Button>
      <Button
        variant="outlined"
        sx={{ width: '4px', marginTop: '20px', marginLeft: '65px' }}
        onClick={handleClear}
      >
        <CachedIcon />
      </Button>
    </>
  )
}
