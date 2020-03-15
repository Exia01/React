import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css'
export class DogList extends Component {
    state = {};
    render() {
        let dogCards

        // const jumbotronStyle ={
        //     backgroundColor: '#e7dea7;',
        //     backgroundImage: 'linear-gradient(90deg, #e7dea7 0%, #d09aa9 100%)',
        //   };
        if (this.props.dogs) {
            dogCards = this.props.dogs.map(dog => {
                return <div className="col mb-4" key={dog.name}>
                    <div className="card bg-transparent border-0">
                        <img src={dog.src} className="rounded-circle card-img-top" alt={dog.name} />
                        <div className="card-body pt-2">
                            <h5 className="card-title text-center"><Link to={`dog/${dog.name}`} className="text-decoration-none text-dark">{dog.name}</Link></h5>
                        </div>
                    </div>
                </div>
            })
        }
        return <div className="container h-100 mt-5 d-flex align-content-center">
            <div className="row row-cols-1 row-cols-md-3 h-50">
                {dogCards}
            </div>
        </div>

    }
}

export default DogList;
