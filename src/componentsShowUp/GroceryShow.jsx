import { Grocery } from "../components/Grocery";
import ComponentShow from "../hocs/ComponentShow";
import products from "../testData/grocery.json";

const GroceryShow = () => {
  return (
    <ComponentShow headline="Grocery">
      <Grocery products={products} />
    </ComponentShow>
  );
};
export default GroceryShow;
