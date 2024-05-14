import { useState } from "react";

// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //  Hook
  const [seletedIndex, setSeletedIndex] = useState(-1);

  return (
    <>
      <h1 className="text-success text-center">{heading}</h1>
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
