import React from 'react'

function Modal() {
  return (
    <div className = "modalBackground">
        <div className = "modalContainer">
            <button> X </button>
            <div className='title'></div>
                <h1>Are you shure you want</h1>
            <div className='body'></div>  
                <p>Confirmando</p>
            <div className='footer'></div>  
                <button> cancel </button>
                <button> continue </button>
        </div>
    </div>
  )
}

export default Modal
