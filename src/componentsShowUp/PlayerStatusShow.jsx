import { PlayerStatus } from "../components/PlayerStatus";
import ComponentShow from "../hocs/ComponentShow";

const PlayerStatusShow = () => {
  return (
    <ComponentShow headline="PlayerStatusShow">
      <PlayerStatus />
    </ComponentShow>
  );
};
export default PlayerStatusShow;
