// components/MobileMenu.tsx
'use client';

import Link from 'next/link';
import ActiveLink from '../ActiveLink';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => any
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="row mx-0">
      <div className="col-12 px-0">
        <ActiveLink
          href="/products"
          className="nav-link mx-0"
          onClick={onClose}
        >
          Products
        </ActiveLink>
      </div>
      <div className="col-12 px-0">
        <ActiveLink
          href="/about"
          className="nav-link mx-0"
          onClick={onClose}
        >
          About
        </ActiveLink>
      </div>
    </div>
  );
}
