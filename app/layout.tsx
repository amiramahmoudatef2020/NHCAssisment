'use client';
import Footer from '../components/footer/Footer';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import Header from '../components/Header/Header';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <NuqsAdapter>
          <main className="main-content flex-grow-1">{children}</main>
        </NuqsAdapter>
        <Footer />
      </body>
    </html>
  );
}
