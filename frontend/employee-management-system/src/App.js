import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployee from './components/ListEmployee'
import CreateEmployee from './components/CreateEmployee'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import UpdateEmployee from './components/UpdateEmployee'

function App() {
  return (
    <div>
      <Router>
        <>
          <Header/>
            <Container>
              <Switch>               
                <Route exact path="/" component={ListEmployee}></Route>
                <Route path="/employees" component={ListEmployee}></Route>
                <Route path="/add-employee" component={CreateEmployee}></Route>
                <Route path="/update-employee/:id" component={UpdateEmployee}></Route>
              </Switch>
            </Container>
          <Footer/>
        </>
      </Router>
    </div>
    )
}

export default App
