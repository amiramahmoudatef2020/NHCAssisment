
import './NoFoundDataStyles.css';
import Image from 'next/image';
import logo from '../../public/images/no-content.svg';

export default function NoFoundData() {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <Image src={logo} alt="Logo" className="logo" priority />
        <p className='no-data-hint mt-4'>No results for your search!</p>
        <p className='no-data-hint'>Try another keyword</p>
      </div>
    );
  }