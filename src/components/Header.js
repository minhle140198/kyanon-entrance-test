import React from 'react';
import Samsunglogo from '../assets/Samsunglogo.png';
const Header = (props) => {
    return (
        <div className='header'>
            
                <label for="collapse" className="btn__collapse">
                    <i className="fa fa-bars"></i>
                </label>
                <img src={Samsunglogo} alt="samsung logo" style={{display : "none"}} className="img-small-divices"/>
                <label className="btn__search">
                    <i className="fas fa-search"></i>
                </label>
                <input type="checkbox" id="collapse" className="input-collapse" style={{display : "none"}}/>
            
            
            {/* <div className="nav-background"></div> */}
            <nav className="header__nav">

            <ul>
                <li><a href=".">di động</a></li>
                <li><a href=".">TV&AV</a></li>
                <li><a href=".">thiết bị gia dụng</a></li>
                <li><a href=".">thiết bị khác</a></li>
            </ul>
            
            <img src={Samsunglogo} alt="samsung logo"/>
            
            <ul>
                <li><a href=".">hỗ trợ </a></li>
                <li><a href=".">doanh nghiệp&nbsp;&nbsp;<i className="fas fa-external-link-alt"></i></a></li>
                <li><a href="."><i className="fas fa-search"></i></a></li>
            </ul>
            </nav>
        </div>
    )
}

export default Header;