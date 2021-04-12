import React, {useContext, useEffect, useRef} from 'react'
import PlayTrackContext from '../../context/PlayTrackContext'
import ShowedFooterContext from '../../context/ShowedFooterContext'
import { Container, ArtistDetail, AudioContainer,VolumeContainer, Div } from './styles'

export const Footer = () => {
  const audio_ref = useRef()
  const play_ref=useRef()
  const {playTrack} = useContext(PlayTrackContext)
  const {show} = useContext(ShowedFooterContext)
  console.log('playTrack', playTrack)
  console.log('show', show)
  
  useEffect(() => {
    if (audio_ref.current) {
      audio_ref.current.load()
      audio_ref.current.play()
      play_ref.current.classList.remove('fa-play')
      play_ref.current.classList.add('fa-pause')

    } 
  },[playTrack])

  const handleChange = (e) => {
    // console.log(e.target.value/100)
    audio_ref.current.volume = e.target.value/100
  }
  const playButton = (e) => {
    console.log(e.target.classList)
    console.log(audio_ref)
    if (audio_ref.current.paused){
      audio_ref.current.play()
      e.target.classList.remove('fa-play')
      e.target.classList.add('fa-pause')
    } else {
      audio_ref.current.pause()
      e.target.classList.remove('fa-pause')
      e.target.classList.add('fa-play')
      
    }
  }
  if(!show) {return <Container></Container>}
  const {artist:{name}, album:{title, cover_small}, preview }  = playTrack
  return(
    <Container>
      <ArtistDetail>
        <figure>
          <img width="100" height="100" src={cover_small} alt=""/>
        </figure>
        <div>
          <p>Cancion</p>
          <small>{name} - {title}</small>
        </div>
      </ArtistDetail>
      <AudioContainer>
        <button>
          <i className="fas fa-step-backward"></i>
        </button>
        <button onClick={playButton}>
          <i className="fas fa-pause" ref={play_ref}></i>
        </button>
        <button>
          <i className="fas fa-step-forward"></i>
        </button>
        <audio ref={audio_ref} >
          <source src={preview} type="audio/mp3" />
        </audio>
      </AudioContainer>
      <VolumeContainer>
        <input type="range" defaultValue='100' onChange={handleChange} />
      </VolumeContainer>
    </Container>
  )
}