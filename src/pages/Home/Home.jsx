import React, { useState } from 'react'
import Hero from './Hero'
import Product from '../Product/Product'
import MidBanner from './MidBanner'
import Features from './Features'
import Testmonial from './Testmonial'



function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Product  searchQuery={searchQuery}/>
      <MidBanner/>
      <Features/>
      <Testmonial/>
    </div>
  )
}

export default Home
