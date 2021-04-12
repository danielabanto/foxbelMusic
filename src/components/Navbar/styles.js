import styled from 'styled-components'

export const Container = styled.div`
  grid-area: sidebar;
  background-color : var(--dark-red-secondary);
  padding: 50px 40px;
  & > div{
    position: fixed;
  }
`
export const H3 = styled.h3`
  color: white;
  margin-bottom: 8px;
`
export const Ul = styled.ul`
  margin-bottom: 26px;
`
export const Li = styled.li`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
  font-weight: 400px;
`
export const Figure = styled.figure`
  margin-bottom: 30px;
`
export const A = styled.a`
  &active {
    color: yellow;
  }
  &:hover{
    cursor: pointer;
  }
`