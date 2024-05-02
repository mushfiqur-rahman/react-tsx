import { useState } from "react";

function ListGroup() {
  let items = ["Khulna", "Dhaka", "Rajshahi", "CTG", "Sylhet"];

  //  Hook
  const [seletedIndex, setSeletedIndex] = useState(-1);

  return (
    <>
      <h1 className="text-success text-center">List</h1>
      {items.length === 0 && <p>No item found. 404!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              seletedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSeletedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
