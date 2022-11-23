import React from 'react';
import './Nav.css'
// import sonyLogo from './sonylogo_WH.png'

function Nav() {
  return (
    <>
    <div className='nav'>
            {/* sony logo in the middle */}
                {/* <img
                    className='sony-logo'
                    src={sonyLogo}
                    alt='Sony Logo'
                /> */}
                <h1 style={{color:"white", letterSpacing:"2px", fontSize:"3em"}}>PlaystatVerse</h1>
    <div className='colored-border'/>
    </div>
    </>
  )
}

export default Nav