import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 340px 1fr;
  grid-template-rows: 90px 1fr 100px;
  grid-template-areas:
      "sidebar header"
      "sidebar main"
      "footer footer";
`