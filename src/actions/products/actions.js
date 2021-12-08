import { upvote, downvote } from "./actionTypes";

export const upvoteAction = (productId) => ({
  type: upvote,
  productId,
});
export const downvoteAction = (productId) => ({
  type: downvote,
  productId,
});
