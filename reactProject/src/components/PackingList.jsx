import Items from "./Items";

const items = [
  {
    id: 1,
    name: "Clothes",
    isPacked: true,
  },
  {
    id: 2,
    name: "Hair Dryer",
    isPacked: false,
  },
  {
    id: 3,
    name: "PowerBank",
    isPacked: false,
  },
  {
    id: 4,
    name: "conditioner",
    isPacked: true,
  },
];

function PackingList() {
  return (
    <>
      <h1>List of items</h1>

      {items.map((item) => {
        return <Items key={item.id} data={item}></Items>;
      })}

      {/* <Items name="Clothes" isPacked={true}></Items>
      <Items name="Hair Dryer" isPacked={false}></Items>
      <Items name="PowerBank" isPacked={false}></Items>
      <Items name="conditioner" isPacked={true}></Items> */}
    </>
  );
}

export default PackingList;
