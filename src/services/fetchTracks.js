export const fetchTracks = async ({searchValue}) => {
  const API1= 'https://api.deezer.com/search?q=track:'
  const API2= 'https://api.deezer.com/search?q=album:"aloe blacc"'
  
  // const [data, setData] = useState('')
  // const [loading, setLoading] = useState(false)
  // const [error,setError] = useState(null)
  // setLoading(true)
  // setError(null)
  let data = []
  let error = null
  try{
    const response_tracks = await fetch(`${API1}${searchValue}`)
    const data_tracks = await response_tracks.json()
    const response_albums = await fetch(`${API2}${searchValue}`)
    const data_albums = await response_albums.json()
    const data_total = data_tracks.data.concat(data_albums.data)
    //ELiminando duplicados
    data = [...new Set(data_total)]

  } catch(err){
    error = err
  }
  console.log(data)
  return { data, error}
}