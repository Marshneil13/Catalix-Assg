import React from 'react'
import Header from '../header/Header'
import "./library.css"

const Library = () => {
  return (
    <div className='library-container'>
      <Header/>
      <div className='library-content'>
        <p>Your saved data will appear here.</p>
      </div>
    </div>
  )
}

export default Library
