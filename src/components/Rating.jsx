/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */

import { useState } from "react";
import './Rating.css';

const Star = ({ onClick, className, content }) => (
  <span onClick={onClick} className={`star-element ${className ?? ""} `}>
    {content}
  </span>
);
export function Rating() {
  const [currentStarIdx, setCurrentStarIdx] = useState(null);
  const starsArray = new Array(5).fill("*");
  const handleStarClick = (starIdx) => () => {
    setCurrentStarIdx(starIdx);
  };

  return (
    <div className="star-container">
      {starsArray.map((s, idx) => (
        <Star
          onClick={handleStarClick(idx)}
          className={
            currentStarIdx !== null && idx <= currentStarIdx ? "active" : ""
          }
          key={`star-${idx}`}
          content={s}
        />
      ))}
    </div>
  );
}
