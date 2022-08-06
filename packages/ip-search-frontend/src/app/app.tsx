// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { resolve } from 'path';
import { useState } from 'react';
import styles from './app.module.css';
import {MyComponent} from './my-component';

export function App() {
  const greeting = 'Hello world 2!';

  return (
    <>
      <h1>{greeting}</h1>
      <MyComponent></MyComponent>
      <div />
    </>
  );

}


export default App;
