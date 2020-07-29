import React from 'react'
import './HeaderTop.css'

//assets
import GhibliLogo from '../../Assets/Ghibli_Header.png'


function HeaderTop() {
    return (
        <div className="header-box">
            <div className="logoHeader">
               <a href="/"><img alt="logo" src={GhibliLogo} /></a> 
            </div>
            <div className="end-phrase">
                <p>The Catalog</p>
            </div>

        </div>

    )
}

export default HeaderTop;