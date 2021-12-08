import { ListItemsForNavigation } from "../components/ListItemsForNavigation";
import ComponentShow from "../hocs/ComponentShow";
import listItemsForNavigation from "../testData/listItemsForNavigation.json";

const ListItemsForNavigationShow = () => {
  return (
    <ComponentShow headline="ListItemsForNavigation">
      <ListItemsForNavigation items={listItemsForNavigation} />
    </ComponentShow>
  );
};
export default ListItemsForNavigationShow;
