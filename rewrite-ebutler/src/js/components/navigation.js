import React, { Component } from 'react';
/*import '../index.css';*/

class Navigation extends React.Component{
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand logo" href="/"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                            Shop
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">Shop</a>
                                <a className="dropdown-item" href="/">aaaaa</a>
                            </div>
                        </li>
                        <li claclassNamess="nav-item dropdown">
                            <a classNameclassName="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                            Promotions
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">Shop</a>
                                <a className="dropdown-item" href="/">bbbbb</a>
                            </div>
                        </li>
                    </ul>
                    <input type="search" name="search" className="col-lg-6" placeholder="Search" />

                    <a href="#" className="btn btn-sm btn-rounded btn-top">Help</a>
                    <a href="#" className="btn btn-sm btn-rounded btn-top">Get Started</a>
                    <a href="#"><img className="img-responsive" src="../images/assets/cart.png" alt="Cart"/></a>
                </div>                    
            </nav>
        );
    }
}

export default Navigation;