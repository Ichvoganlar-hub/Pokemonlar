import React from 'react'
import Section1 from './bodysection/Section1'
import HeroSwiper from './bodysection/HeroSwiper'
import { useParams } from 'react-router-dom'
import SwiperdanKeyingi from './bodysection/SwiperdanKeyingi.jsx'

const Home = () => {
  const { filterName } = useParams()
  const activeFilter = filterName ? decodeURIComponent(filterName) : null

  return (
    <div>
      <HeroSwiper />
      <SwiperdanKeyingi/>
      <Section1 filter={activeFilter} />
    </div>
  )
}

export default Home
