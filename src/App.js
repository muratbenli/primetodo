import React from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import {PrimeTodoProvider} from "./context/PrimeTodoContext";

function App() {
  return (
      <div className="App">
          <header className="App-header">
             <PrimeTodoProvider>
                 <TodoForm />
             </PrimeTodoProvider>
          </header>
      </div>
  );
}

export default App;
