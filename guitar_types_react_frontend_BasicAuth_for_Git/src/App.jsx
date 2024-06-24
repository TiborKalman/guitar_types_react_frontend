//import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GuitarTypesListComponent from "./components/GuitarTypesListComponent.jsx";
import About from "./extras/About.jsx";
import GuitarTypeComponent from "./components/GuitarTypeComponent.jsx";
import AnmeldungComponent from "./components/AnmeldungComponent.jsx";
import Menu from "./extras/Menu.jsx";
import LoginComponent from "./components/LoginComponent.jsx";
import {isCurrentUserAuthenticated} from "./services/RegistrierungsService.jsx";


function App() {

  return (
      <>

          <BrowserRouter>
              <Menu/>
              <Routes>
                  <Route path='/' element={<LoginComponent/>}></Route>
                  <Route path='/guitar-types' element={
                      isCurrentUserAuthenticated() &&
                      <GuitarTypesListComponent/>
                  }></Route>
                  <Route path='/edit-guitar-type/:id' element={
                      isCurrentUserAuthenticated() &&
                      <GuitarTypeComponent/>
                  }></Route>
                  <Route path='/login' element={<LoginComponent/>}></Route>
                  <Route path='/create-guitar-type' element={
                      isCurrentUserAuthenticated() &&
                      <GuitarTypeComponent/>
                  }></Route>
                  <Route path='/anmeldung' element={
                      isCurrentUserAuthenticated() &&
                      <AnmeldungComponent/>
                  }></Route>


              </Routes>
          </BrowserRouter>
          <br/>
          <h1 className='form-control-color '>Guitar Types</h1>
          <br/>
          <br/>
          <About/>
      </>
  )
}

export default App

/*
<>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            {}
<Route path='/' element = { <ListEmployeeComponent />}></Route>
{}
<Route path='/employees' element = { <ListEmployeeComponent /> }></Route>
{}
<Route path='/add-employee' element = { <EmployeeComponent />}></Route>

{}
<Route path='/edit-employee/:id' element = { <EmployeeComponent /> }></Route>
</Routes>
</BrowserRouter>
</>
 */
