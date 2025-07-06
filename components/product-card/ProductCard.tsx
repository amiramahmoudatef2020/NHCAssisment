'use client';

import Image from 'next/image';
import Link from 'next/link';
import './ProductCardStyles.css';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  onMoreClick?: () => void;
  thumbnail: string;
  id: string;
}

export default function ProductCard({
  image,
  title,
  description,
  price,
  onMoreClick,
  thumbnail,
  id,
}: ProductCardProps) {
  return (
    <div className="product-card row mx-0 flex-column justify-content-between">
      <div className="product-image-container">
        <Image src={thumbnail} alt={title} fill objectFit="contain" />
      </div>

      <h3 className="product-title">{title}</h3>

      <p className="product-description">{description}</p>

      <div className="product-footer row mx-0 justify-content-between align-items-center">
        <div className="col-auto px-0">
          <span className="product-price-label">Price : <span className='product-price'>{price}$</span></span>
        </div>
        <div className="col-auto px-0">
          <button className='more-btn'>
            <Link href={`/products/${id}`} className="button-link">
              More
            </Link>
          </button>
        </div>

      </div>
    </div>
  );
}
