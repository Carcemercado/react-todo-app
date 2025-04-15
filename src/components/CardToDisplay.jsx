import "./CardToDisplay.css";
import CardLogic from "../containers/CardLogic";

function CardToDisplay() {
  return (
    <div>
      <CardLogic cardTitle="Card Title" cardDescription="Card Description" />
    </div>
  );
}

export default CardToDisplay;
