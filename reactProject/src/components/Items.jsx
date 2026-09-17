function Items(props) {
  if (props.isPacked) {
    return (
      <>
        <li>{props.name} ✔</li>
      </>
    );
  } else return <li>{props.name} </li>;
}

export default Items;
