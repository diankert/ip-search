// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { resolve } from 'path';
import { useState } from 'react';
import {MyComponent} from './my-component';


export function App() {
  const greeting = 'IP-Search';

  return (
    <>
    <div >
      <span className="box">
        <h1 style={{fontFamily: "Arial", fontWeight: "lighter"}} >{greeting}</h1>
        <br></br>
        <h4 style={{fontFamily: "Arial", fontWeight: "lighter"}}>Search any IP Address</h4>
      </span>
        <div className='mainComponentDiv'>
          <MyComponent></MyComponent>
        </div>
    </div>
      <div />
    </>
  );

}

export default App;
