//Modal.js  18.02.2019 

import React, {Component} from 'react';
import './Study.scss';

import InputMask from 'react-input-mask';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {phoneNumber: '', email: '', submitFile: ''};

        this.onPhoneNumber = this.onPhoneNumber.bind(this);
        this.onSubmitFile = this.onSubmitFile.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(event) {
        fetch('http://mmsi/action_ajax_form.php', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phoneNumber: this.state.phoneNumber,
                submitFile: this.state.submitFile,
                email: this.state.email
            })
        })
            .then(res => console.log(res));

        //console.log(`${this.state.phoneNumber} \n ${this.state.submitFile} \n ${this.state.email}`);

        event.preventDefault();
    }

    onPhoneNumber(event) {

        this.setState({phoneNumber: event.target.value});
    }

    onSubmitFile(event) {
        this.setState({submitFile: event.target.value});
    }

    onEmailChange(event) {
        this.setState({email: event.target.value});
    }


    render() {



        return (
            <div className="Modal">

                <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="modelTitleId">Modal title</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form noValidate="novalidate" onSubmit={this.onSubmit} id="ajax_form">
                                <div className="modal-body">
                                    <div className="form-group has-succes|has-warning|has-danger">
                                        <label htmlFor="phoneNumber">Phone number</label>
                                        <InputMask
                                            id="phoneNumber"
                                            className="form-control" {...this.props}
                                            name="phoneNumber"
                                            onChange={this.onPhoneNumber}
                                            mask="+3\8 0\(99\) 999 99 99"
                                            maskChar=" "
                                            placeholder="+38 0(XX) XXX-XX-XX"
                                            value={this.state.phoneNumber} />

                                        {/*<div className="form-text text-muted">s</div>*/}


                                        <label htmlFor="submitFile">Select file</label>
                                        <input id="submitFile"
                                               className="form-control-file"
                                               name="submitFile"
                                               type="file"
                                               aria-describedby="fileHelpId"

                                               value={this.state.submitFile}
                                               onChange={this.onSubmitFile}
                                        />
                                        {/*<div className="form-control-feedback">Validation message</div>*/}


                                        <label htmlFor="email">Set email</label>
                                        <input id="email"
                                               className="form-control"
                                               type="email"
                                               name="email"
                                               aria-describedby="emailHelpId"
                                               placeholder="yomail@mail.com"

                                               value={this.state.email}
                                               onChange={this.onEmailChange}
                                        />
                                       {/* <div className="form-control-feedback">Validation message</div>*/}

                                    </div>

                                </div>
                                <div className="modal-footer">
                                    {/*<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>*/}
                                    <button type="submit" className="btn btn-primary btn-lg btn-block rounded ">submit
                                    </button>
                                </div>
                            </form>

                            <div id="result_form">{this.state.phoneNumber + "\n" + this.state.email}</div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}




export default Modal;
