'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => any
}

export default function ActiveLink({ href, children, className = '', onClick = () => {} }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? 'active-link': ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
