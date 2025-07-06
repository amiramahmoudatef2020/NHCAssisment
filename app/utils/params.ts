type Params = { [key: string]: string };

export async function getSafeParams(
  ctx: { params: Params },
  requiredKeys: string[]
): Promise<Params> {
  const params = await Promise.resolve(ctx.params);

  const isMissing = requiredKeys.some((key) => !params?.[key]);
  if (isMissing) throw new Error('Missing route parameters');

  return params;
}
