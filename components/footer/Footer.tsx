'use client';
import './FooterStyles.css';
import Image from 'next/image';
import whiteNHCLogo from '../../public/images/white-nhc.png';
import vision2030Logo from '../../public/images/Vision2030 White.png';


export default function Footer() {
  return (
    <footer className="page-footer row mx-0 align-items-end">
      <div className="footer-container row mx-0 justify-content-between align-items-center">
        <div className='col-auto'>
          <Image src={whiteNHCLogo} alt="Logo" className="logo" priority />
          <Image src={vision2030Logo} alt="Logo" className="logo" priority />
        </div>
        <div className="footer-copyright col-auto">
          All rights reserved © 2022 - Developed and operated by National
          Housing
        </div>
      </div>
    </footer>
  );
}
