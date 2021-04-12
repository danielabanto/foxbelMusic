import React from 'react'
import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'
import { MainComp } from '../../components/MainComp'
import { Footer } from '../../components/Footer'
import { Container } from './styles'

export const CatalogoPrincipal = () => {
  return(
    <Container>
      <Navbar />
      <Header />
      <MainComp />
      <Footer />
    </Container>
  )
}