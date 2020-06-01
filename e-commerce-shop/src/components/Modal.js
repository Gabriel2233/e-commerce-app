import React from 'react'

export const Modal = () => {

    return (
      <div id='modal' className="modal-dialog modal-dialog-centered">
           <div className="modal-content">
                <div className="modal-body" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    Your item was successfully added to the cart
                    <i className='fas fa-check-circle fa-2x p-3' style={{color: 'green'}} />
                </div>
                <div className="modal-footer">
                    <div />
                </div>
            </div>
        </div>
    )
}
