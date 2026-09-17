function Items(props) {
  return <li>{props.isPacked ? props.name + "✔" : props.name}</li>;
}

export default Items;
