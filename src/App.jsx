import { useState } from "react";
import TopNews from "./TopNews";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <TopNews />
    </div>
  );
}

export default App;
