import React from 'react'
import { Route, createBrowserRouter,createRoutesFromElements,RouterProvider, Router} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainLayout from './Pages/MainLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element= {<HomePage/>}/>
    </Route>));
const App = () => {
  return <RouterProvider router = {router}/>
}

export default App