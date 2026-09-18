import Items from "./Items";
import { items } from "../utils/mockdata";
import { useState } from "react";

function PackingList() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    index==3 ? setIndex(0) : setIndex(index+1);
    
  }
  const item = items[index];
  return (
    <>
      <h1>List of items</h1>
      <h2>{item.name}</h2>
      <img src={item.url} width="200px" height="200px" />
      <br />

      <button onClick={handleClick}>Next</button>
    </>
  );
}

export default PackingList;
