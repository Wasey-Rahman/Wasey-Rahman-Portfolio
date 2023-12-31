import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import resumePDF from './Resume of Wasey Rahman.pdf'
import { Link } from 'react-router-dom';
const NavigationBar = () => {
    const handleDownloadResume = () => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'resume.pdf';
    
        // Simulate a click event on the link to trigger the download
        link.click();
      };
    
    return (
        <>
           <div className="navbar bg-pink-700">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-pink-400 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/Projects">Projects</Link></li>
       
      </ul>
    </div>
    <a className="font-extrabold text-1xl text-white">Wasey_Rahman_Portfolio</a>
  </div>
  <div className="navbar-center hidden lg:flex text-black">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/">Home</Link></li>
      <li><Link to="/Projects">Projects</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  
    <a className="btn " onClick={handleDownloadResume}><FontAwesomeIcon icon={faDownload} />Resume</a>
 
  </div>
  
  
</div>
        </>
    );
};

export default NavigationBar;