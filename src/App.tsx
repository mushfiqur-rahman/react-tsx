import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
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
      </div>
    </>
  );
}

export default App;
