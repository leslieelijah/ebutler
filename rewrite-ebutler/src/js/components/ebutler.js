import React from 'react';
import '../../index.css';

/*import menu from './navigation';
import slider from './slider';*/
  class Ebutler extends React.Component {
    render() {
      return (
        <div id="ebutler">
          <header id="navigation">
            <Navigation />
          </header>

          <section id="slider">
            {/*<Slider />*/}
          </section>

          <section id="products">
              <article></article>

              <article></article>

              <article></article>
          </section>

          <section id="footerSlider"></section>

          <footer id="footer"></footer>
        </div>
      )
    }

  }

  class Navigation extends React.Component{
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand logo" href="/">&nbsp;</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                            Shop
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">Shop</a>
                                <a className="dropdown-item" href="/">aaaaa</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
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

                    <a href="/" className="btn btn-sm btn-rounded btn-top">Help</a>
                    <a href="/" className="btn btn-sm btn-rounded btn-top">Get Started</a>
                    <a href="/"><img className="img-responsive" src="../images/assets/cart.png" alt="Cart"/></a>
                </div>                    
            </nav>
        );
    }
}

class Slider extends React.Component{
  render(){
          return(
              <div className="row">        
                  <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
                      
                      <ol className="carousel-indicators">
                          <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                          <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                          <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                      </ol>
                      
                      <div className="carousel-inner" role="listbox">

                          <div className="carousel-item active">
                              <img className="d-block w-100" src="../images/assets/top-banner1.png" alt="First slide"/>
                          </div>
                          
                          <div className="carousel-item">
                              <img className="d-block w-100" src="../images/assets/top-banner2.png" alt="Second slide"/>
                          </div>
                         
                          <div className="carousel-item">
                              <img className="d-block w-100" src="../images/assets/top-banner3.png" alt="Third slide"/>
                          </div>
                          
                      </div>
                  </div>
              </div>
          );
  }
}

export default Ebutler;