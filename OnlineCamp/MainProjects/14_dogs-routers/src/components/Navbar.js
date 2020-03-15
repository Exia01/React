import React from 'react'
import { withRouter, Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './Navbar.css'
const Navbar = (props) => {
    let { dogs } = props
    let dogLinks
    if (dogs) {
        dogLinks = dogs.map(dog => {
            return <li className="nav-item" key={uuidv4()}><NavLink exact className="nav-link" activeClassName='active' to={`/dog/${dog.name}`}> {dog.name} </NavLink> </li>
        })
    }
    return (
        <header className="bg-dark">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-dark ">
                    <Link className="navbar-brand" to="/">Dog Shelter</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            {dogLinks}
                        </ul>

                    </div>
                </nav>
            </div>
        </header>
    )
}

export default withRouter(Navbar);
