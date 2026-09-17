function Items(props) {
  return <li>{props.data.isPacked ? props.data.name + "✔" : props.data.name}</li>;
}

export default Items;
