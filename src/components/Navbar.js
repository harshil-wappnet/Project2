import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                {/* Home Link */}
                <li className="nav-item ">
                    <Link className="nav-link active text-black" aria-current="page" to="/step-one">StepOne</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link active text-black" aria-current="page" to="/step-two">StepTwo</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link active text-black" aria-current="page" to="/step-three">StepThree</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link active text-black" aria-current="page" to="/news">News</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link active text-black" aria-current="page" to="/visited">Visited</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
