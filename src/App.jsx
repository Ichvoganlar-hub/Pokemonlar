import React from 'react'
import Header from './ReyComponents/HEader/Header'
import { Outlet } from 'react-router-dom'
import React, { useEffect, useState } from "react";
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
