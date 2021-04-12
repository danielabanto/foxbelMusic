import styled from 'styled-components'

export const Div = styled.div`
  background-color:gray;
` 

export const Container = styled.footer`
  grid-area: footer;
  position: fixed;
  z-index: 100;
  bottom: 0;
  background-color: rgba(235, 87, 87, 1);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 30px;
` 

export const ArtistDetail = styled.div`
  display: flex;
  width: 40vw;
  & figure{
    margin-right: 20px;
  }
  & figure img{
    object-fit: cover;
  }
  & div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
  }
  & div p{
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  & div small{
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
  }
` 

export const AudioContainer = styled.div`
  display: flex;
  width: 30vw;
  justify-content: center;
  align-items: center;
  & i{
    color: white;
    font-size: 20px;
    /* margin: 0 10px; */
    padding: 15px;
  }
  & i:hover{
    background-color: rgba(255,255,255,.1);
    border-radius: 50%;
    cursor: pointer;
  }
` 

export const VolumeContainer = styled.div`
  display: flex;
  width: 30vw;
  align-items: center;
  justify-content:flex-end;
  & input:hover{
    cursor: pointer;
  }
` 
