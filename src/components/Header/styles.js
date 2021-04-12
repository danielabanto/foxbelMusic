import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  & div:first-child{
    position: relative;
  }
  & div:first-child .fas{
    position: absolute;
    top: 7px;
    right: 10px;
    color: gray;
  }
  & div:last-child{
    display: flex;
  }
  & div:last-child .fas{
    margin-right: 10px;
    color: var(--red-principal)
  }
`
export const Input = styled.input`
  width: 524px;
  padding: 7px 16px;
  border-radius: 10px;
  border: 1px solid #828282;
  outline: none;
`