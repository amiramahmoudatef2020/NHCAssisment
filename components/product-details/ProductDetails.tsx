'use client';

import Image from 'next/image';
import React from 'react';
import './ProductDetailsStyles.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

type Props = {
  productDetails: Product;
};

export default function ProductDetails({ productDetails }: Props) {
  return (
    <div className="product-details-contianer row mx-0 flex-column">
      <h1 className="product-name">
        {productDetails.title}
      </h1>
      <div className="row mx-0 justify-content-center">
        <div className="product-image-container col-auto">
          <Image src={productDetails.thumbnail} alt={productDetails.title} fill objectFit="contain" />
        </div>
      </div>
      <div className="row mx-0 justify-content-center mt-3">
          <div className="product-info row mx-0 justify-content-between col-auto px-0">
            <div className="col-12 px-0 col-sm-auto">
              <div className="row mx-0">
                <span className='label'>Price: <span className='value'>{productDetails.price}$</span></span>
              </div>
              <div className="row mx-0 flex-nowrap align-items-center">
                <div className="col-auto">
                  <span className='label'>Rating:</span> 
                </div>
                <div className="col-auto px-0">
                  <div style={{ display: 'block' }}>
                    <Rating style={{ maxWidth: 100 }} value={productDetails.rating} readOnly />
                  </div>
                </div>
              </div>
              <div className="row mx-0">
                <span className='label'>Brand: <span className='value'>{productDetails.brand}</span></span>
              </div>
            </div>
            <div className="col-12 px-0 col-sm-auto">
              <div className="row mx-0">
                <span className='label'>Discount Percentage: <span className='value'>{productDetails.discountPercentage}</span></span>
              </div>
              <div className="row mx-0">
                <span className='label'>Stock: <span className='value'>{productDetails.stock}</span></span>
              </div>
              <div className="row mx-0">
                <span className='label'>Category: <span className='value'>{productDetails.category}</span></span>
              </div>
            </div>
          </div>
      </div>
      <div className="row mx-0 justify-content-md-center mt-5">
        <div className="product-description col-12 col-md-9">
          <h1 className='title'>Product Description</h1>
          <p className='description'>{productDetails.description}</p>
        </div>
      </div>

      <div className="row mx-0 justify-content-md-center my-5">
        <div className="product-images col-12 col-md-9">
          <h1 className='title'>Product Images</h1>
          <div className="images-list row mx-0 justify-content-center justify-content-sm-start">
            {productDetails.images.map((image: string, index: number) => (
                <div key={index} className="product-small-image-container col-auto">
                  <Image src={image} alt={productDetails.title} fill objectFit="contain" />
                </div>
            ))}
          </div>
        </div>
      </div>      
    </div>
  );
};
