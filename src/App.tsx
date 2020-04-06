import React from "react";
import { DndProvider } from "react-dnd";
import Backed from "react-dnd-html5-backend";
import Example from "./components/Example";

function App(): JSX.Element {
  return (
    <div className="App">
      <DndProvider backend={Backed}>
        <Example />
      </DndProvider>
    </div>
  );
}

export default App;
