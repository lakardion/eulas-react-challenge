/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

import { useReducer } from "react";
import { downvoteAction, upvoteAction } from "../actions/products";
import productsReducer from "../reducers/productsReducer";
import "./Grocery.css";

function Product(props) {
  function handlePlus() {
    props.dispatcher(upvoteAction(props.productInfo.id));
  }

  function handleMinus() {
    props.dispatcher(downvoteAction(props.productInfo.id));
  }

  return (
    <>
      <span className="grocery-product-name">{props.productInfo.name}</span>
      <span>votes:</span>
      <span>{props.productInfo.votes}</span>
      <div>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </div>
    </>
  );
}

export function Grocery({ products }) {
  const [productsState, dispatch] = useReducer(productsReducer, products);
  return (
    <ul className="grocery-list">
      {productsState.map((p) => (
        <li key={`product-item-${p.id}`} className="grocery-item">
          <Product
            key={`product-${p.name}`}
            productInfo={p}
            dispatcher={dispatch}
          />
        </li>
      ))}
    </ul>
  );
}
