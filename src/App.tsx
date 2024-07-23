import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
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
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <>
      <div>
        {alertVisibility && (
          <Alert onClose={() => setAlertVisibility(false)}>
            Hello <span>World</span>
          </Alert>
        )}
        <Button color="primary" onClick={() => setAlertVisibility(true)}>
          My Button
        </Button>
        <ListGroup items={items} heading="Cities" />
      </div>
    </>
  );
}

export default App;
