import React from 'react'

export default props => (
    <div id="menu">
        <div className="top-bar" data-responsive-toggle="main-nav" data-hide-for="medium">
            <button className="menu-icon dark" type="button" data-toggle="main-nav"></button>
            <div className="title-bar-title"></div>
        </div>            
        <div className="top-bar" id="main-nav">
            <div className="top-bar-left">
                <ul className="dropdown menu vertical medium-horizontal align-center" data-dropdown-menu>
                    <li>
                        <a className="menu" href="#home">Home</a>
                    </li>
                    <li>
                        <a className="menu" href="#listen">Listen</a>
                    </li>
                    <li>
                        <a className="menu" href="#watch">Watch</a>
                    </li>
                    <li>
                        <a className="menu" href="#gallery">Gallery</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)