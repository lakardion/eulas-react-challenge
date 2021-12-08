import { TeamsList } from "../components/TeamsList";
import ComponentShow from "../hocs/ComponentShow";

const TeamsListShow = () => {
  return (
    <ComponentShow headline="TeamList">
      <TeamsList />
    </ComponentShow>
  );
};
export default TeamsListShow;
