import React from 'react'
import Section1 from './bodysection/Section1'
import HeroSwiper from './bodysection/HeroSwiper'
import { useParams } from 'react-router-dom'
import SwiperdanKeyingi from './bodysection/SwiperdanKeyingi.jsx'
import Footer from './Footer/Footer.jsx'

const Home = () => {
  const { filterName } = useParams()
  const activeFilter = filterName ? decodeURIComponent(filterName) : null

  return (
    <div>
      <HeroSwiper />
      <SwiperdanKeyingi/>
      <Section1 filter={activeFilter} />
      <Footer/>
    </div>
  )
}

export default Home
