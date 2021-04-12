import React from 'react'
import { GlobalStyles} from './styles/GlobalStyles'
import { CatalogoPrincipal } from './pages/CatalogoPrincipal'
import { TracksProvider } from './context/TracksContext'
import {MainTrackProvider} from './context/MainTrackContext'
import {PlayTrackProvider} from './context/PlayTrackContext'
import {ShowedFooterProvider} from './context/ShowedFooterContext'

function App() {
  return (
    <TracksProvider>
      <MainTrackProvider>
        <PlayTrackProvider>
          <ShowedFooterProvider>
            <GlobalStyles />
            <CatalogoPrincipal />
          </ShowedFooterProvider>
        </PlayTrackProvider>
      </MainTrackProvider>
    </TracksProvider>
  );
}

export default App;
