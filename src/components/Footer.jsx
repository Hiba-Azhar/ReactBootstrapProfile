import React from 'react'

function Footer() {
  return (
    <div>
      <div className='p-4 mt-4 bg-dark text-white d-flex align-items-center justify-content-center'>
        copyright @ {new Date().getFullYear()} by Hiba Creations
      </div>
    </div>
  )
}

export default Footer
