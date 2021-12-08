import { downvote, upvote } from "../actions/products";
import {
  downvoteProduct,
  updateProductImmutably,
  upvoteProduct,
} from "../utils/productUtils";

const productsReducer = (state, action) => {
  switch (action.type) {
    case upvote: {
      return updateProductImmutably(state, action.productId, upvoteProduct);
    }
    case downvote: {
      return updateProductImmutably(state, action.productId, downvoteProduct);
    }
    default:
      return state;
  }
};

export default productsReducer;
