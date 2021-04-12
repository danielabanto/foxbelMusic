import React, { useState, useContext } from 'react'
import { Container, Input } from './styles'
import { fetchTracks } from '../../services/fetchTracks'
import TracksContext from '../../context/TracksContext'
// import MainTrackContext from '../../context/MainTrackContext'

export const Header =   () => {
  const [searchValue, setSearchValue] = useState('')
  const {setTracks} = useContext(TracksContext)
  
  // const {setMainTrack} = useContext(MainTrackContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(searchValue)
    const data = await fetchTracks({searchValue})
    setTracks(data)

    // console.log('dataaaa', data.data[0])
    // setMainTrack(data.data[0])
  }
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  return(
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <Input value={searchValue} onChange={handleChange} type="text" placeholder="Buscar"/>
        </form>
        <i className="fas fa-search" />
      </div>
      <div>
        <i className="fas fa-user" />
        <p>Daniel A</p>
      </div>
    
    </Container>
  )
}