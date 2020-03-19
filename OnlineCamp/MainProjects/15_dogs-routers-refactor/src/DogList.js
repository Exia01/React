import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

class DogList extends Component {
  render() {
    
    let dogsList = this.props.dogs.map(d => (
      <div className='Dog col-lg-4 text-center' key={d.name}>
        <img src={d.src} alt={d.name} />
        <h3 className='mt-3'>
          <Link className='underline' to={`/dogs/${d.name}`}>
            {d.name}
          </Link>
        </h3>
      </div>
    ));

    return (
      <div className='DogList'>
        <h1 className='display-1 text-center mt-3 mb-5'>Dog List!</h1>
        <div className='row'>{dogsList}</div>
      </div>
    );
  }
}
export default DogList;
