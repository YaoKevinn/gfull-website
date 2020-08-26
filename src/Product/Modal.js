import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './Modal.css'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <IconButton style={{position:'absolute', top:'5px', right:'5px'}} onClick={handleClose} >
                <CloseIcon/>
          </IconButton>
        </section>
      </div>
    );
  };

  
export default Modal;