import Items from "./Items";
import { items } from "../utils/mockdata";
import { use, useState } from "react";

function PackingList() {
  const [index, setIndex] = useState(0);
  const [ShowMore, setShowMore] = useState(true);

  function handleClick() {
    index == 3 ? setIndex(0) : setIndex(index + 1);
  }

  function handleShowMore() {
    setShowMore(!ShowMore);
  }

  const item = items[index];
  return (
    <>
      <h1>List of items</h1>
      <h2>{item.name}</h2>
      <img src={item.url} width="200px" height="200px" />
      <br />
      <p>{!ShowMore && item.description}</p>

      <button onClick={handleClick}>Next</button>
      <button onClick={handleShowMore}>
        {ShowMore ? "Show" : "Hide"}description
      </button>
    </>
  );
}

export default PackingList;
