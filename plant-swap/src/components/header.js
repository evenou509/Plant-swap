import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className= "container">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="/">Let's Garden</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-item nav-link active" href="/">Home</a>
                                <a class="nav-item nav-link" href="/swap">Swap Plants!</a>
                                <a class="nav-item nav-link" href="/search">Search Plants</a>
                                <a class="nav-item nav-link" href="/blog">Blog</a>
                                <a class="nav-item nav-link" href="#">News</a>
                                <a class="nav-item nav-link" href="#">Contact Us</a>
                            </div>
                        </div>
                    </nav>

                </div>

            </header>
        )
    }
}


export default Header;