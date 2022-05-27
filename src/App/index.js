import React, { useState } from 'react';
import { TodoProvider } from '../TodoContext';


function App() {
  const [first, setfirst] = useState(['estado compartido'])
  return (<React.Fragment>
    <TodoHeader>

    <TodoCounter></TodoCounter>
      <TodoSearch></TodoSearch>
    </TodoHeader>
    <TodoList>
    <TodoItem first={first}></TodoItem>
    </TodoList>
  </React.Fragment>)
}
function TodoHeader({children}) {
  return (
    <header>{children}</header>
  );
}
function TodoList({children}) {
  return (
    <section className='todoList-container'>
     {children}
    </section>
  );
}
function TodoCounter() {
  return <p>TodoCounter</p>;
}
function TodoSearch() {
  return <p>TodoSearch</p>;
}
function TodoItem({first}) {
  return <p> first: {first}</p>;
}
/* function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
} */

export default App;
