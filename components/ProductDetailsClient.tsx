'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProductById } from '../lib/api/products';

type ProductDetailsClientProps = {
  id: string;
};

export default function ProductDetailsClient({
  id,
}: ProductDetailsClientProps) {
  const [product, setProduct] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      if (!data) {
        router.push('/not-found'); // Or show inline not found state
      } else {
        setProduct(data);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="text-green-600 font-semibold">Price: ${product.price}</p>
    </div>
  );
}
