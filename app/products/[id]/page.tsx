import { getProductById } from '../../../lib/api/products';
import ProductDetails from '../../../components/product-details/ProductDetails';
import { notFound } from 'next/navigation';
import { getSafeParams } from '../../utils/params';

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  let id: string;

  try {
    const safeParams = await getSafeParams({ params }, ['id']);
    id = safeParams.id;
  } catch {
    return notFound();
  }

  const product = await getProductById(id);

  if (!product) return notFound();

  return <ProductDetails productDetails={product} />;
}
