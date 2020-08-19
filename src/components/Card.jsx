import React from 'react'
import { Cards } from 'react-bootstrap'

class Card extends React.Component {
    render() {
        const { card } = this.props;
        return (
          <div className="card">
            <div class="card-body">
              <h5 class="card-title">{card.name || card.aliases[0] || 'Unknown'}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{card.gender || 'Unknown'}</h6>
              <p class="card-text">{card.culture || 'Unknown'}</p>
            </div>
          </div>
        );
    }
}

export default Card
