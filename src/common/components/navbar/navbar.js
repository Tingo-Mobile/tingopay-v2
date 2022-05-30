import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { BTN, Modal } from '../..';
import { Logo } from '../../../assets/import';

const navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg sticky-top " style={{padding: '20px 0px'}}>
            <div className="container">
                <a className="navbar-brand" href="#"><img src={Logo} alt='TingoPay Logo'/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li> 
                    <li className="nav-item">
                    <a className="nav-link" href="#"></a>
                    </li> */}
                     <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Our Solutions
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Buy Airtime</a></li>
                        <li><a className="dropdown-item" href="#">Buy Data</a></li>
                        <li><a className="dropdown-item" href="#">Pay Electricity Bill</a></li>
                        <li><a className="dropdown-item" href="#">Pay Cable TV</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Take Loan</a></li>
                    </ul>
                    </li>
                    <ul className='navbar-nav'>
                    
                    <li className='nav-item'>
                        <button className='nav-link active border-0 bg-white' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Help Center</button>
                    </li>
                    
                </ul>
                </ul>
                
                <Modal />
                    <BTN
                        btnText={ <div> <FaCloudDownloadAlt /> Download App </div>}
                    />
                </div>
            </div>
        </nav>
    </>
  )
}

export default navbar