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
  function handleClick() {
    alert("Hey i am clicked");
  }

  return (
    <>
      <h1>List of items</h1>

      {items.map((item) => {
        return <Items key={item.id} data={item}></Items>;
      })}

      <button onClick={handleClick}>I am a button</button>
      <button onClick={function handleCli(){
        alert("hey");
      }}>I am a button</button>

      <button onClick={() => {
        alert("hey");
      }}>I am a button</button>

    </>
  );
}

export default PackingList;
