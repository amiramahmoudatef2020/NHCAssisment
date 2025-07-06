'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import logo from '../../public/Isolation_Mode.svg';
import ActiveLink from '../ActiveLink';
import './HeaderStyles.css';
export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`header ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
      <div className="header-content row mx-0 justify-content-between">
        <nav className="navbar justify-content-start col-auto">
          <div className="navbar-brand">
            <Link href="/">
              <Image src={logo} alt="Logo" className="logo" priority />
            </Link>
          </div>
          <div className="navbar nav">
            <ActiveLink href="/products" className='nav-link'>Products</ActiveLink>
            <ActiveLink href="/about" className='nav-link'>About</ActiveLink>
          </div>
        </nav>
        <div className="mobile-button-wrapper col-auto">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-button"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="mobile-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
