import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisisble, setAlertVisibility] = useState(false);
  return (
    <div>
      { alertVisisble && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button color='primary'onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
