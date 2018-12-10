import React from 'react'

function About() {
    return (
        <div className='container my-3 bg-light'>
            <h1 className="display-4">ITAD competition app v1.0</h1>
            <p className="lead">
                This app was created and is still creating for competition organized by ITAD Politechnika Lubelska
            </p>
            <p className="lead">
                It is simple task manager app for two type of accounts "organizer" and "coworker"
            </p>
            <p>
                For now application allows to:
            </p>
            <ul>
                <li> create accounts</li>
                <li> create tasks by organizer and assign to available coworker</li>
                <li> track tasks by organizers and coworkers</li>
            </ul>
            <h2>In the nearrest future I plan to improve app v1.0 by </h2>
            <ul>
                <li> improving RWD</li>
                <li> refactoring/cleaning code</li>
                <li> end basic version of planed app so:
                    <ul>
                        <li>full CRUD options for organizers and coworkers</li>
                        <li>add more option of tracking </li>
                        <li>add some notifications</li>
                        <li>more advanced assigning tasks e.g big task for team</li>
                    </ul>
                </li>
                <li>version v2.0 will be use more ways to signing up e.g facebook, github etc (evrything thanks firebase</li>
                <li>I want implement some message API to sending notes by SMS if e.g coworker is lazy</li>
            </ul>

            <h4>Thank You very much for Your attetion</h4>
            <p className="lead">If You have any sugestions or ideas for improving this app this is my socials: <a href="https://www.facebook.com/szymon.piotr.oleszek" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-square fa-2x mx-3"></i>
            </a>
                <a href="https://www.linkedin.com/in/szymon-oleszek-js-dev/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>

            </p>


        </div>
    )
}

export default About
