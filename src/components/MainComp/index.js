import React, { useContext } from 'react'
import TracksContext from '../../context/TracksContext' 
import MainTrackContext from '../../context/MainTrackContext' 
import PlayTrackContext from '../../context/PlayTrackContext'
import ShowedFooterContext from '../../context/ShowedFooterContext' 
import { Container, Hero, Figure, Img, ButtonContainer, HeroDetailContainer, HeroDetailBackground, Button1, Button2, Section, Main, ResultContainer } from './styles'


/*COMPONENTE RESULT*/
const Result = ({resultado, count}) => {
  const {setMainTrack} =useContext(MainTrackContext)
  const handleClick = (resultado) => {
    setMainTrack(resultado)
  }
  return(
    <ResultContainer onClick={() => handleClick(resultado)}>
      <figure>
        <i className="fas fa-play"></i>
        <img width='160' height='160' src={resultado.album.cover_medium} alt="alt"/>
      </figure>
      <p>{resultado.title}</p>
      <small>{resultado.artist.name}</small>
    </ResultContainer>
  )
}

/*COMPONENTE RESULTS LIST*/
const Results = () => {
  const resultado =  useContext(TracksContext)
  console.log('resultado', resultado)
  return(
    <> 
      {
        resultado.tracks.data.map((resultado, count) => (
          <Result resultado={resultado} key={resultado.id} />
        ))
      }
    </>
  )
}

/*COMPONENTE MAIN COMPONENT*/
export const MainComp = () => {
  const main_resultado = useContext(MainTrackContext)
  const playTrackContext = useContext(PlayTrackContext)
  const {setShow} = useContext(ShowedFooterContext)
  // console.log('main_resukltado', main_resultado)
  const mainTrack = main_resultado.mainTrack
  console.log('MainTrack',mainTrack)
  const {artist:{name, picture_xl}, album:{title, cover_medium}, rank }  = mainTrack

  const handleClick = (track) =>{
    playTrackContext.setPlayTrack(track)
    setShow(true)
  }
  
  return(
    <Container>
      <Hero>
        <Figure>
          <i className="fas fa-play"></i>
          <Img width="250" height="250" src={cover_medium} alt=""/>
        </Figure>
        <HeroDetailBackground picture={picture_xl}>
          <HeroDetailContainer>
            <h3>{name}</h3>
            <h4>{title} <span>{rank} seguidores</span></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ButtonContainer>
              <Button1 onClick={() => handleClick(mainTrack)}>Reproducir</Button1>
              <Button2>Seguir</Button2>
              <a href="/"><span></span><span></span><span></span></a>
            </ButtonContainer>
          </HeroDetailContainer>
        </HeroDetailBackground>
      </Hero>
      <Main>
        <h3>Resultados</h3>
        <Section>
          <Results />
        </Section>
      </Main>
    </Container>
  )
}