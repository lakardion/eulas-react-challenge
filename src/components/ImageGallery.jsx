/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import { useState } from "react";
import './ImageGallery.css'

function Image({ src, onRemove }) {
  return (
    <div className="image">
      <img src={src} alt="random unsplash" />
      <button className="remove" onClick={onRemove}>
        X
      </button>
    </div>
  );
}

export function ImageGallery({ links }) {
  const [imgLinks, setImgLinks] = useState(links);
  const handleRemoveImage = () => {
    setImgLinks((imgLinks) => {
      return imgLinks.slice(1, imgLinks.length - 1);
    });
  };
  const handleReset = () => setImgLinks(links);
  return (
    <div className="image-gallery-container">
      {imgLinks?.length ? (
        <Image src={imgLinks[0]} onRemove={handleRemoveImage} />
      ) : (
        "No more images to show :("
      )}
      <button onClick={handleReset}>RESET!</button>
    </div>
  );
}
