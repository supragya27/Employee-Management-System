import React from 'react'
import ListEmployee from './components/ListEmployee'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header/>
    <Container>
      <ListEmployee/>
    </Container>
    <Footer/>
    </>
    )
}

export default App
