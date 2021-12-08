/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";
import './ListItemsForNavigation.css'

export function ListItemsForNavigation({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const activeItemRef = useRef(null);

  useEffect(
    function () {
      activeItemRef?.current?.focus();
      //could be used if list is too long
      // activeItemRef?.current?.scrollIntoView({ behavior: "smooth" });
    },
    [selectedIndex]
  );

  function handleKeyDown(event) {
    //Added the keys as the assignment suggested. However to my view looks odd to press up key and go down (next item) in the list. Same with pressing down key and going up in the list.

    switch (event.key) {
      case "ArrowUp":
      case "ArrowRight": {
        event.preventDefault();
        setSelectedIndex((idx) => (idx === items.length - 1 ? idx : idx + 1));
        break;
      }
      case "ArrowDown":
      case "ArrowLeft": {
        event.preventDefault();
        setSelectedIndex((idx) => (idx === 0 ? idx : idx - 1));
        break;
      }
      default:
        return;
    }
  }

  return (
    <ul onKeyDown={handleKeyDown} tabIndex={0}>
      {items.map((i, idx) => {
        const isFocused = selectedIndex === idx;
        return (
          <li
            key={`focusable-list-item-${i.id}`}
            className="focusable-list-item"
          >
            <div
              className={`item-list-card ${isFocused ? "item-focused" : ""}`}
              ref={isFocused ? activeItemRef : null}
              onClick={() => setSelectedIndex(idx)}
            >
              <div className="item-navigation-avatar">
                <img src={i.avatar} alt={`${i.name} ${i.lastName}`} />
              </div>
              <div className="item-navigation-info">
                <div className="item-navigation-field">
                  <label>Name:</label>
                  <div>{i.name}</div>
                </div>
                <div className="item-navigation-field">
                  <label>Last name:</label>
                  <div>{i.lastName}</div>
                </div>
                <div className="item-navigation-field">
                  <label>Address</label>
                  <div>{i.address}</div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
