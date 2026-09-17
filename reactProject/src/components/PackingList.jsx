import Items from "./Items";

function PackingList() {
  return (
    <>
      <h1>List of items</h1>
      <Items name="Clothes" isPacked={true}></Items>
      <Items name="Hair Dryer" isPacked={false}></Items>
      <Items name="PowerBank" isPacked={false}></Items>
      <Items name="conditioner" isPacked={true}></Items>
    </>
  );
}

export default PackingList;
