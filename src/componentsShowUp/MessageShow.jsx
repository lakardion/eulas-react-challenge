import { Message } from "../components/Message";
import ComponentShow from "../hocs/ComponentShow";

const MessageShow = () => {
  return (
    <ComponentShow headline="Message">
      <Message />
    </ComponentShow>
  );
};
export default MessageShow;
