import React from 'react'
import Navbar from './Components/navbar'
import Hero from './Components/hero'
import HomeCards from './Components/HomeCards'
import { JobListings } from './Components/JobListings'

const App = () => {
  return (<>
  <Navbar/>

  {/* <!-- Hero --> */}

  <Hero/>

  {/* <!-- Developers and Employers --> */}
  <HomeCards/>
  {/* <!-- Browse Jobs --> */}
  <JobListings />
  

  <section className="m-auto max-w-lg my-10 px-6">
    <a
      href="jobs.html"
      className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</a
    >
  </section></>

  )
}

export default App