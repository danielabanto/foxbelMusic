import React, { useState } from 'react'
const INITIAL_STATE = {
      "id": 445997982,
      "readable": true,
      "title": "I Need A Dollar",
      "title_short": "I Need A Dollar",
      "link": "https://www.deezer.com/track/445997982",
      "duration": 243,
      "rank": 773063,
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      // "preview": "https://cdns-preview-2.dzcdn.net/stream/c-21415d695fa50f209d4e204c52187903-5.mp3",
      "md5_image": "677f3e0eab0d805787ee11bda67ee2c3",
      "artist": {
        "id": 10183,
        "name": "Aloe Blacc",
        "link": "https://www.deezer.com/artist/10183",
        "picture": "https://api.deezer.com/artist/10183/image",
        "picture_small": "https://cdns-images.dzcdn.net/images/artist/9c32944158f7eb8870785258e84313ff/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://cdns-images.dzcdn.net/images/artist/9c32944158f7eb8870785258e84313ff/250x250-000000-80-0-0.jpg",
        "picture_big": "https://cdns-images.dzcdn.net/images/artist/9c32944158f7eb8870785258e84313ff/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://cdns-images.dzcdn.net/images/artist/9c32944158f7eb8870785258e84313ff/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/10183/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": 54302092,
        "title": "Good Things",
        "cover": "https://api.deezer.com/album/54302092/image",
        "cover_small": "https://cdns-images.dzcdn.net/images/cover/677f3e0eab0d805787ee11bda67ee2c3/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://cdns-images.dzcdn.net/images/cover/677f3e0eab0d805787ee11bda67ee2c3/250x250-000000-80-0-0.jpg",
        "cover_big": "https://cdns-images.dzcdn.net/images/cover/677f3e0eab0d805787ee11bda67ee2c3/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://cdns-images.dzcdn.net/images/cover/677f3e0eab0d805787ee11bda67ee2c3/1000x1000-000000-80-0-0.jpg",
        "md5_image": "677f3e0eab0d805787ee11bda67ee2c3",
        "tracklist": "https://api.deezer.com/album/54302092/tracks",
        "type": "album"
      },
      "type": "track"
    }


const PlayContext = React.createContext({})

export function PlayTrackProvider ({children}){
  const [playTrack, setPlayTrack] = useState(INITIAL_STATE)
  return (
    <PlayContext.Provider value={{playTrack, setPlayTrack}}>
      {children}
    </PlayContext.Provider>
  )
}
export default PlayContext