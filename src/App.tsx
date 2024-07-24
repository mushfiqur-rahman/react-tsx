import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  const items = [
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
      <div className="container">
        {alertVisibility && (
          <Alert onClose={() => setAlertVisibility(false)}>
            Hello <span>World</span>
            35th No Lecture
          </Alert>
        )}
        <Button color="primary" onClick={() => setAlertVisibility(true)}>
          My Button
        </Button>
        <Like onClick={() => console.log("clicked")} />
        <ListGroup items={items} heading="Cities" />
      </div>
    </>
  );
}

export default App;
