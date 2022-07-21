import classes from './Modal.module.css'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'

const Backdrop = () => {
    return <div className={classes.backdrop} />
}

const ModalOverlay = props => {
    return  <div className={classes.modal}>
                {props.children}
            </div>
}

const element = document.getElementById("modal-cart");

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />,element)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,element)}
    </Fragment>
}

export default Modal;




