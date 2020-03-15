import React from 'react'


const Dog = props => {
    console.log(props)
    let foundDog
    if (props.dogs) {
        foundDog = props.dogs.find(dog => {
            return dog.name == props.match.params.name
        });
    }
    if (foundDog) {
        foundDog = <div className="card border-0">
            <img src={foundDog.src} className="card-img-top h-50" alt={foundDog.name} />
            <div className="card-body ">
                <h5 className="card-title">{foundDog.name}</h5>
                <button type="button" name="" id="" className="btn btn-primary">Test</button>
            </div>
        </div>
    }
    return (
        <div className="container my-5">
            {foundDog}
        </div>
    )
}



export default Dog
