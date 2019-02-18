import React, {Component} from 'react';
import './Works.scss';




class Works extends Component {
    render() {
        return (
            <div className="Works" id="Works">
                <div className="container">
                   <div className="title-head text-center">
                       <h1>RECENT WORKS</h1>
                       <p>It has survived not only five centuries, but also the leap scrambled it to make a type.</p>
                       <svg className="line-dot-line" width="198" height="10" viewBox="0 0 198 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 5H81" stroke="#999999"/>
                           <path d="M117 5H197" stroke="#999999"/>
                           <circle cx="99" cy="5" r="4" fill="#E74C3C"/>
                       </svg>
                   </div>
                    <nav className="breadcrumb justify-content-center">
                        <span className="breadcrumb-item active">ALL</span>
                        <a className="breadcrumb-item text-secondary" href="/">PRINT DESIGN</a>
                        <a className="breadcrumb-item text-secondary" href="/">ANIMATION</a>
                        <a className="breadcrumb-item text-secondary" href="/">ART</a>
                        <a className="breadcrumb-item text-secondary" href="/">WEB DESIGN</a>
                        <a className="breadcrumb-item text-secondary" href="/">PHOTOGRAPHY</a>
                        <a className="breadcrumb-item text-secondary" href="/">VIDEO</a>
                    </nav>
                </div>


                <div className="litle-galery">
                    <div className="d-flex justify-content-between bd-highlight ">
                        <div className="col ">
                            <img src={ require("../images/item1.jpg") } alt="item1"/>
                            <div className="describe-item">
                                <h6 className="title-image">
                                    T-SHIRT DESIGN
                                </h6>
                                <p>art / t-shirt</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={ require("../images/item1.jpg") } alt="item1"/>
                            <div className="describe-item">
                                <h6 className="title-image">
                                    T-SHIRT DESIGN
                                </h6>
                                <p>art / t-shirt</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={ require("../images/item1.jpg") } alt="item1"/>
                            <div className="describe-item">
                                <h6 className="title-image">
                                    T-SHIRT DESIGN
                                </h6>
                                <p>art / t-shirt</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={ require("../images/item1.jpg") } alt="item1"/>
                            <div className="describe-item">
                                <h6 className="title-image">
                                    T-SHIRT DESIGN
                                </h6>
                                <p>art / t-shirt</p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between bd-highlight ">
                        <div className="col">
                            <img src={ require("../images/item1.jpg") } alt="item1"/>
                            <div className="describe-item">
                                <h6 className="title-image">
                                    T-SHIRT DESIGN
                                </h6>
                                <p>art / t-shirt</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={ require("../images/item1.jpg") } alt="item1"/>
                            <div className="describe-item">
                                <h6 className="title-image">
                                    T-SHIRT DESIGN
                                </h6>
                                <p>art / t-shirt</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={ require("../images/item1.jpg") } alt="item1"/>
                            <div className="describe-item">
                                <h6 className="title-image">
                                    T-SHIRT DESIGN
                                </h6>
                                <p>art / t-shirt</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={ require("../images/item1.jpg") } alt="item1"/>
                            <div className="describe-item">
                                <h6 className="title-image">
                                    T-SHIRT DESIGN
                                </h6>
                                <p>art / t-shirt</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Works;
