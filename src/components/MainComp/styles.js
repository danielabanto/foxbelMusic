import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px 40px;
  grid-area: main;
`
export const Hero = styled.div`
  display: flex;
  margin-bottom: 40px;
`
export const Figure = styled.figure`
  position: relative;
  & i {
    position: absolute;
    z-index: 10;
    font-size: 70px;
    color: white;
    font-weight: 900;
    left: calc(50% - 35px);
    top: calc(50% - 30px)
  }
`

export const Img = styled.img`
object-fit: cover;
object-position: center;
`

export const HeroDetailBackground = styled.div`
  background-image: url(${props => props.picture});
  background-position: center 15%;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 250px;
  height: 250px;
`

export const HeroDetailContainer = styled.div`
  padding: 40px 30px 20px;
  background-color: rgba(167, 0, 0, 0.7);
  color: white;
  height: 100%;
  & h4{
    margin-bottom: 20px;
  }
  & h4 span{
    margin-left: 16px;
    color: rgba(102, 35, 35, 1);
  }
  & p{
    font-size: 12px;
    line-height: 20px;
    height: 60px;
    margin-bottom: 30px;
  }
`


export const ButtonContainer = styled.div`
 margin: 0 auto;
 & button{
   width: 117px;
   height: 31px;
   border-radius: 10px;
   color: white;
   font-size: 14px;
 }
 & button:hover{
   cursor: pointer;
 }
 & a span{
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: white;
  margin-right: 4px;
  border-radius: 50%;
 }
`

export const Button1 = styled.button`
  background-color: var(--red-principal)
`

export const Button2 = styled.button`
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid #EB5757;
  color: var(--red-principal)
`



/*--------MAin--------*/
export const Main = styled.main`
  margin-bottom: 100px;
  & h3{
    margin-bottom: 20px;
    color: var(--red-principal)
  }
` 

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 22px;
`


export const ResultContainer = styled.button`
  & figure{
    width: 160px;
    height: 160px;
    margin-bottom:8px;
    position: relative;
  }
  & figure i {
    position: absolute;
    z-index: 10;
    font-size: 36px;
    color: white;
    font-weight: 900;
    left: calc(50% - 18px);
    top: calc(50% - 20px)
  }
  &:hover{
    cursor: pointer;
  }
  & figure img{
    object-fit: cover;
  }
  & p{
    color: rgba(85, 85, 85, 1);
    font-size:14px;
    line-height: 17.5px;
    font-weight: 700;
  }
  & small{
    color: rgba(130, 130, 130, 1);
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
  }
` 

