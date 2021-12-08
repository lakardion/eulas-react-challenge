import { useState } from "react";
import { FocusableInput } from "../components/FocusableInput";
import ComponentShow from "../hocs/ComponentShow";

const FocusableInputShow = () => {
  const [shouldFocus, setShouldFocus] = useState(false);
  const handleFocusableChange = () => setShouldFocus((sf) => !sf);
  return (
    <ComponentShow headline="FocusableInput">
      <button onClick={handleFocusableChange}>
        {shouldFocus ? "Remove the focus" : "Add focus"}
      </button>
      <FocusableInput focusable={shouldFocus} />
    </ComponentShow>
  );
};
export default FocusableInputShow;
