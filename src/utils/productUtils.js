export const upvoteProduct = (product) => ({
  ...product,
  votes: product.votes + 1,
});
export const downvoteProduct = (product) => ({
  ...product,
  votes: product.votes - 1,
});

export const updateProductImmutably = (state, productId, productUpdater) => {
  const stateCopy = [...state];
  const idx = stateCopy.findIndex((p) => p.id === productId);
  const productCopy = productUpdater(stateCopy[idx]);
  stateCopy[idx] = productCopy;
  return stateCopy;
};
