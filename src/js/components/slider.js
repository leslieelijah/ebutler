import React, { Component } from 'react';

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

export default Slider;