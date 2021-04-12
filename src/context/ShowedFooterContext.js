import React, {useState} from 'react'

const ShowedFooterContext = React.createContext({})

export function ShowedFooterProvider ({children}){
  const [show, setShow] = useState(false)
  return (
    <ShowedFooterContext.Provider value={{show, setShow}}>
      {children}
    </ShowedFooterContext.Provider>
  )
}
export default ShowedFooterContext