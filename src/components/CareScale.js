import sunIcon from "../assets/sun.svg";
import waterIcon from "../assets/water.svg";

function handleClick(plantType, plantRange) {
  const quantityLabel =
    plantRange === 1 ? "peu" : plantRange === 2 ? "modérément" : "beaucoup";

  {
    plantType === "light"
      ? alert(`Cette plante requiert ${quantityLabel} de lumière`)
      : alert(`Cette plante requiert ${quantityLabel} d'arrosage`);
  }
}

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={sunIcon} alt="sun-icon" />
    ) : (
      <img src={waterIcon} alt="water-icon" />
    );

  return (
    <div onClick={() => handleClick(careType, scaleValue)}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
