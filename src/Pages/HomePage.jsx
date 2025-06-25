import React from 'react'
import Hero from '../Components/hero'
import HomeCards from '../Components/HomeCards'
import { JobListings } from '../Components/JobListings'
import ViewAll from '../Components/ViewAll'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <JobListings/>
    <ViewAll/>
    </>
  )
}

export default HomePage