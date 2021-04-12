import React from 'react'
import { Container, H3, Li, Figure, Ul, A } from './styles'

const libreria_items = {
  listName: 'Mi Librería',
  items: ['Recientes', 'Artistas', 'Álbums', 'Canciones', 'Estaciones']
}

const playlist_items = {
  listName: 'Playlist',
  items: ['Metal', 'Para bailar', 'Rock 90s', 'Baladas']
}

const NavbarItem = ({items}) => (
  <>
    <H3>{items.listName}</H3>
    <Ul>
      {
        items.items.map((item) => (
          <A href="/" key={item}>
            <Li>{item}</Li>
          </A>
        ))
      }
    </Ul>
  </>
)

export const Navbar = () => {
  return(
    <Container>
      <div>
        <div href="/">
          <Figure>
            <img width="250" src="http://drive.google.com/uc?export=view&id=1jlj6CdEj8D-jXXTHKwGmaGG0AJMkkxZL" alt="logo"/>
            {/* https://drive.google.com/file/d/1jlj6CdEj8D-jXXTHKwGmaGG0AJMkkxZL/view?usp=sharing */}
          </Figure>
        </div>
        <NavbarItem items={libreria_items} />
        <NavbarItem items={playlist_items} />
      </div>
    </Container>
  )
}