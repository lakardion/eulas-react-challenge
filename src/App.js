import "./App.css";
import FocusableInputShow from "./componentsShowUp/FocusableInputShow";
import GroceryShow from "./componentsShowUp/GroceryShow";
import ImageGalleryShow from "./componentsShowUp/ImageGalleryShow";
import ListItemsForNavigationShow from "./componentsShowUp/ListItemsForNavigationShow";
import MessageShow from "./componentsShowUp/MessageShow";
import PlayerStatusShow from "./componentsShowUp/PlayerStatusShow";
import RatingShow from "./componentsShowUp/RatingShow";
import TeamsListShow from "./componentsShowUp/TeamsListShow";

export default function App() {
  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}

      <FocusableInputShow />
      <GroceryShow />
      <ImageGalleryShow />
      <ListItemsForNavigationShow />
      <MessageShow />
      <PlayerStatusShow />
      <RatingShow />
      <TeamsListShow />
    </div>
  );
}
