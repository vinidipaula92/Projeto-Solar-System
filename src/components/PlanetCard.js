import React, { Component } from 'react';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}
/* PlanetCard.propTypes = {
  planetData: PropTypes.shape ({
    planetName: PropTypes.string,
    planetImage: PropTypes.string
  })
}; */
export default PlanetCard;
