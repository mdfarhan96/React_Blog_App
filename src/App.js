import React from "react";
import Display from "./components/display";
import { DataContext } from "./components/context";
function App() {
  return (
    <div>
      <DataContext>
        <Display />
      </DataContext>
    </div>
  );
}

export default App;
