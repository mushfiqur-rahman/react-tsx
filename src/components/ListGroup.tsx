function ListGroup() {
  let items = ["Khulna", "Dhaka", "Rajshahi", "CTG", "Sylhet"];

  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found. 404!</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
