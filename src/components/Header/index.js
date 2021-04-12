import React, { useState, useContext } from 'react'
import { Container, Input, Charging } from './styles'
import { fetchTracks } from '../../services/fetchTracks'
import TracksContext from '../../context/TracksContext'
// import MainTrackContext from '../../context/MainTrackContext'

export const Header =   () => {
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(false)
  const {setTracks} = useContext(TracksContext)
  
  // const {setMainTrack} = useContext(MainTrackContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(searchValue)
    setLoading(true)
    try {
      const data = await fetchTracks({searchValue})
      setTracks(data)
      setLoading(false)
    } catch(err) {
      console.error(err)
    }

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
          <button>
            <i className="fas fa-search" />
          </button>
        </form>
        {
          loading && <Charging>Cargando...</Charging>
        }
      </div>
      <div>
        <i className="fas fa-user" />
        <p>Daniel A</p>
      </div>
    
    </Container>
  )
}