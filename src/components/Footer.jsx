import React, {Component} from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="card-group col-md justify-content-between">

                            <div className="card border-0 flex-column  text-center col-md">
                                <div className="svg-wraper border border-secondary rounded-circle align-self-center">
                                    <svg className="eather feather-tag"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round">
                                        <path
                                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </div>

                                <div className="card-block">
                                    <h4 className="card-title">3891</h4>
                                    <p className="card-text">User Favourites</p>
                                </div>
                            </div>

                            <div className="card border-0 flex-column  text-center col-md">
                                <div className="svg-wraper border border-secondary rounded-circle align-self-center">
                                    <svg className="feather feather-tag" xmlns="http://www.w3.org/2000/svg" width="24"
                                         height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path
                                            d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                        <line x1="7" y1="7" x2="7" y2="7"></line>
                                    </svg>
                                </div>
                                <div className="card-block">
                                    <h4 className="card-title">281K</h4>
                                    <p className="card-text">Posts Last 24 Hours</p>
                                </div>
                            </div>

                            <div className="card border-0 flex-column  text-center col-md">
                                <div className="svg-wraper border border-secondary rounded-circle align-self-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-thumbs-up">
                                        <path
                                            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                </div>
                                <div className="card-block">
                                    <h4 className="card-title">618</h4>
                                    <p className="card-text">Total Posts</p>
                                </div>
                            </div>

                            <div className="card border-0 flex-column  text-center col-md">
                                <div className="svg-wraper border border-secondary rounded-circle align-self-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-star">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                </div>
                                <div className="card-block">
                                    <h4 className="card-title">178</h4>
                                    <p className="card-text">Campaigns</p>
                                </div>
                            </div>

                            <div className="card border-0 flex-column  text-center col-md">
                                <div className="svg-wraper border border-secondary rounded-circle align-self-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-bookmark">
                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                <div className="card-block">
                                    <h4 className="card-title">178</h4>
                                    <p className="card-text">Campaigns</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
