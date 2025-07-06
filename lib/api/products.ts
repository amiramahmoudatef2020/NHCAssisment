export async function getProductsBySearch(query: string) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  return res.json();
}

export async function getProductById(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) return null;
  return res.json();
}
export async function searchProducts(query: string): Promise<any[]> {
  try {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
}