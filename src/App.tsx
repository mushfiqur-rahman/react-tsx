import "./App.css";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Khulna",
    "Dhaka",
    "Rajshahi",
    "CTG",
    "Sylhet",
    "Rongpur",
    "Gazipur",
    "Kumilla",
  ];

  return (
    <>
      <div>
        <Alert>
          Hello <span>World</span>
        </Alert>
        <ListGroup items={items} heading="Cities" />
      </div>
    </>
  );
}

export default App;
