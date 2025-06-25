import React from 'react'
import Navbar from './Components/navbar'
import Hero from './Components/hero'
import HomeCards from './Components/HomeCards'
import { JobListings } from './Components/JobListings'
import  ViewAll  from "./Components/ViewAll";

const App = () => {
  return (<>
  <Navbar/>

  {/* <!-- Hero --> */}

  <Hero/>

  {/* <!-- Developers and Employers --> */}
  <HomeCards/>
  {/* <!-- Browse Jobs --> */}
  <JobListings />
  
  <ViewAll/>
  </>

  )
}

export default App