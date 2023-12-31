import React from 'react'
import card from '../images/card1.jpg'

function Cards() {
  return (
    <div class='container mt-5  d-flex justify-content-center'>
      <div class='card' style={{ width: '18rem' }}>
        <img src={card} class='card-img-top' alt='card-image' />
        <div class='card-body'>
          <h5 class='card-title'>Beautiful Flowers</h5>
          <p class='card-text'>It's a card sample.</p>
          <a href='#' class='btn btn-dark justify-content-center'>
            Select
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cards
