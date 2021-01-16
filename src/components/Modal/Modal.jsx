import React, { Component } from 'react';
import Button from '../Button/Button';
import './Modal.scss';



class Modal extends Component {

    constructor(props) {
        super(props)

        this.state = { isOpen: false }
    }

    showModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { header, text, textConfirm, bgColorHeader, bgColorBody, bgColorFooter, closeButton, backgroundColor, textBtn, bgInfo } = this.props.fields;
        return (
            <div>
                <Button className="btn" text={textBtn} style={{ backgroundColor: backgroundColor }} onClick={() => this.showModal()} />
                {
                    this.state.isOpen &&
                    <div className="wrapper" onClick={() => this.showModal()}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header" style={{ backgroundColor: bgColorHeader }}>
                                <h5 className="modal-title">{header}</h5>
                                {closeButton ? <span className="close" onClick={() => this.showModal()}>&times;</span> : ''}
                            </div>
                            <div className="modal-body" style={{ backgroundColor: bgColorBody }}>
                                <p className="text-modal">{text}</p>
                                <p>{textConfirm}</p>
                            </div>
                            <div className="modal-footer" style={{ backgroundColor: bgColorFooter }}>
                                <Button onClick={this.props.onClick()} className="btn btn-m1" text='Ok' style={{ backgroundColor: bgInfo }} />
                                <Button onClick={() => this.showModal()} className="btn btn-m1" text='Cancel' style={{ backgroundColor: bgInfo }} />
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Modal;