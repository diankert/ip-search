// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { resolve } from 'path';
import { useState } from 'react';
import {MyComponent} from './my-component';


export function App() {
  const greeting = 'IP-Search';

  return (
    <>
    <div className='mainComponentDiv'>
        <h1 className='headerText'>{greeting}</h1>
        <br></br>
        <h4 className='headerText'>Search any IP Address</h4>
          <MyComponent></MyComponent>
    </div>
      <div />
    </>
  );

}

export default App;
