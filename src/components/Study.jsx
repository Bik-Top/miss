import React, {Component} from 'react';
import './Study.scss';
import $ from 'jquery';
import Modal from './Modal';



class Study extends Component {
    componentDidMount(){
        $('.carousel').carousel({
            interval: 0
        })


    }
    render() {
        return (
            <div className="Study">
                <div className="container">
                    <div className="title-head text-center">
                        <h1>CASE STUDY</h1>
                        <p>A brief story about how this process works, keep an eye till the end.</p>
                        <svg className="line-dot-line" width="198" height="10" viewBox="0 0 198 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5H81" stroke="#999999"></path>
                            <path d="M117 5H197" stroke="#999999"></path>
                            <circle cx="99" cy="5" r="4" fill="#E74C3C"></circle>
                        </svg>
                    </div>
                    <div className="carusel-wrap row ">
                        <div className="col-md-7 align-self-center">
                            <div id="carouselId" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselId" data-slide-to="1"></li>
                                    <li data-target="#carouselId" data-slide-to="2"></li>
                                </ol>

                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="card-group custom-card">
                                            <div className="card m-3 border-0 p-5">
                                                <div className="border border-secondary wrap-img">
                                                    <img src={ require("../images/glasses.png") } alt="glasses"/>
                                                </div>
                                                <div className="card-block">
                                                    <h4 className="card-title">SLEEK DESIGN</h4>
                                                    <p className="card-text text-md-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur delectus dolor iste itaque labore rem rerum tempora, vitae voluptas. Beatae eius eveniet facere incidunt praesentium quasi rem vero voluptatibus.</p>
                                                    <button type="button"
                                                            className="btn btn-danger btn-danger-recoler"
                                                            data-toggle="modal"
                                                            data-target="#modelId">
                                                        read more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card-group custom-card">
                                            <div className="card m-3 border-0 p-5">
                                                <div className="border border-secondary wrap-img">
                                                    <img src={ require("../images/hart.png") } alt="hart"/>
                                                </div>
                                                <div className="card-block text-xs-center">
                                                    <h4 className="card-title">CLEAN CODE</h4>
                                                    <p className="card-text text-md-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur delectus dolor iste itaque labore rem rerum tempora, vitae voluptas. Beatae eius eveniet facere incidunt praesentium quasi rem vero voluptatibus.</p>
                                                    <button type="button"
                                                            className="btn btn-danger btn-danger-recoler"
                                                            data-toggle="modal"
                                                            data-target="#modelId">
                                                        read more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card-group custom-card">
                                            <div className="card m-3 border-0 p-5">
                                                <div className="border border-secondary wrap-img">
                                                    <img src={ require("../images/lamp.png") } alt="lamp"/>
                                                </div>
                                                <div className="card-block text-xs-center">
                                                    <h4 className="card-title">CREATIVE IDEAS</h4>
                                                    <p className="card-text text-md-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur delectus dolor iste itaque labore rem rerum tempora, vitae voluptas. Beatae eius eveniet facere incidunt praesentium quasi rem vero voluptatibus.</p>
                                                    <button type="button"
                                                            className="btn btn-danger btn-danger-recoler"
                                                            data-toggle="modal"
                                                            data-target="#modelId">
                                                        read more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 d-none  d-md-block">
                            <img src={ require("../images/element.jpg") } alt="element"/>
                        </div>
                    </div>
                </div>


                <Modal/>

            </div>
        );
    }
}

export default Study;
