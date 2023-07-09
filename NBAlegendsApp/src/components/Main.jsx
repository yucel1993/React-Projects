import Card from "./Card";

function Main({ filteredValue }) {
  return (
    <div className="bg-light myBack w-75 mx-auto">
      <Card filteredValue={filteredValue} />
    </div>
  );
}

export default Main;
