import React, {Component} from 'react';
import './Header.scss';




class Header extends Component {


    render() {
        return (
            <div className="Header" >

                <div className="container">
                    <div className="row justify-content-md-between">
                        <div className="card-group custom-card">
                            <div className="card m-3 border-0">
                                <div className="border border-secondary wrap-img">
                                    <img src={ require("../images/glasses.png") } alt="glasses"/>
                                </div>
                                <div className="card-block text-xs-center">
                                    <h4 className="card-title">SLEEK DESIGN</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Corporis distinctio doloribus eaque exercitationem impedit nemo, quae quia quod
                                        vel vero?</p>
                                </div>
                            </div>

                            <div className="card m-3 border-0">
                                <div className="border border-secondary wrap-img">
                                    <img src={ require("../images/hart.png") } alt="hart"/>
                                </div>
                                <div className="card-block text-xs-center">
                                    <h4 className="card-title">CLEAN CODE</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Facilis, sunt?</p>
                                </div>
                            </div>

                            <div className="card m-3 border-0">

                                <div className="border border-secondary wrap-img">
                                    <img src={ require("../images/lamp.png") } alt="lamp"/>
                                </div>
                                <div className="card-block text-xs-center">

                                    <h4 className="card-title">CREATIVE IDEAS</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Autem consequatur delectus dolor iste itaque labore rem rerum tempora, vitae
                                        voluptas. Beatae eius eveniet facere incidunt praesentium quasi rem vero
                                        voluptatibus.</p>
                                </div>
                            </div>

                            <div className="card m-3 border-0">
                                <div className="border border-secondary wrap-img">
                                    <img src={ require("../images/chats.png") } alt="chats"/>
                                </div>
                                <div className="card-block text-xs-center">
                                    <h4 className="card-title">FREE SUPPORT</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Ab aspernatur consectetur exercitationem mollitia nihil odio odit placeat
                                        possimus quis quod!</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
