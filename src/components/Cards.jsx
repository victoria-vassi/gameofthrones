import React from 'react'

const Cards = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{card.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{card.email}</h6>
            <p class="card-text">{card.company.catchPhrase}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Cards
