import classes from './Modal.module.css'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick} />
}

const ModalOverlay = props => {
    return  <div className={classes.modal}>
                {props.children}
            </div>
}

const element = document.getElementById("modal-cart");

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClose} />,element)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,element)}
    </Fragment>
}

export default Modal;




