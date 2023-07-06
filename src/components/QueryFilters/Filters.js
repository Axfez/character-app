import CachedIcon from '@mui/icons-material/Cached'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  genderSelected,
  pageSelected,
  search,
  statusSelected,
} from '../../services/characterSlice'
import { setVisibility } from '../../services/mobileSlice'

export const Filters = () => {
  const { searchName: storedSearch, gender: storedGender, status: storedStatus } = useSelector(
    state => state.character
  )
  const [searchName, setSearchName] = useState(storedSearch)
  const [gender, setGender] = useState(storedGender)
  const [status, setStatus] = useState(storedStatus)

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth', })
    if (e.key === 'Enter' || e.type === 'click') {
      dispatch(search(searchName))
      dispatch(statusSelected(status))
      dispatch(genderSelected(gender))
      dispatch(pageSelected(1))
      dispatch(setVisibility(false))
    }
  }

  const handleClear = () => {
    window.scrollTo({ top: 0, behavior: 'smooth', })
    dispatch(search(''))
    dispatch(statusSelected(''))
    dispatch(genderSelected(''))
    dispatch(pageSelected(1))
    dispatch(setVisibility(false))
    setStatus('')
    setGender('')
    setSearchName('')
  }

  const handleStatus = e => {
    e.preventDefault()
    setStatus(e.currentTarget.value)
  }

  const handleGender = e => {
    e.preventDefault()
    setGender(e.currentTarget.value)
  }

  const handleSearch = e => {
    e.preventDefault()
    setSearchName(e.currentTarget.value)
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
        <select onChange={handleStatus} value={status}>
          <option></option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </Box>

      <Box sx={{ marginTop: '15px', textAlign: 'center' }}>
        <div>Gender</div>
        <select onChange={handleGender} value={gender}>
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