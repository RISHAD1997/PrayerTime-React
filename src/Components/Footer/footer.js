import React from 'react'
import './footer.css'

function Footer() {

    let today = new Date();
    let year = today.getUTCFullYear();

    return (
        <div className='footer'>
            <p>Copyright @ {year} created by <a href='https://github.com/RISHAD1997'>Rishad</a></p>
        </div>
    )
}

export default Footer
