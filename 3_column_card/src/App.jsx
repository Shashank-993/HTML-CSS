import React from 'react'
import Columns from './components/Columns'
import "./index.css"
import { useState } from 'react'
const App = () => {
  
  return (
    <main className='min-h-screen p-(--space-s) lg:p-(--space-xl) bg-(--gray) flex justify-center items-center '>
      <Columns />
    </main>
  )
}

export default App