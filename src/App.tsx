import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Khulna", "Dhaka", "Rajshahi", "CTG", "Sylhet"];

  return (
    <>
      <div>
        <ListGroup items={items} heading="Cities"/>
      </div>
    </>
  );
}

export default App;
