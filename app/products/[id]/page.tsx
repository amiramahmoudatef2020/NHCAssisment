import { getProductById } from '../../../lib/api/products';
import ProductDetails from '../../../components/product-details/ProductDetails';
import { notFound } from 'next/navigation';
import { getSafeParams } from '../../utils/params';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  let id: string;

  try {
    const resolvedParams = await params; // await the promise
    const safeParams = await getSafeParams({ params: resolvedParams }, ['id']);
    id = safeParams.id;
  } catch {
    return notFound();
  }

  const product = await getProductById(id);

  if (!product) return notFound();

  return <ProductDetails productDetails={product} />;
}
