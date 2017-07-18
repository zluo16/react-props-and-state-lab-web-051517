import React from 'react';
import PropTypes from 'prop-types'
import Pet from './Pet';
import Pets, {getAll, getByType, getBetweenAge} from '../data/pets'

class PetBrowser extends React.Component {

  constructor(props) {
    super(props)
  }

  createPets = () => {

  }

  render() {
    const pets = this.props.pets.map(pet => {
      return (
        <Pet
          pet={pet}
          key={pet.id}
          onAdoptPet={this.props.onAdoptPet}
          isAdopted={this.props.adoptedPets.includes(pet.id)}
        />
      )
    })

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
