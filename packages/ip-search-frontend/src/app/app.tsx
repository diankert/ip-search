import { MyComponent } from './my-component';

export function App() {
  const greeting = 'IP-Search';
  const title = 'Search any IP Address';
  const info = 'If no IP adress is provided, your IP address will be used!';

  return (
    <>
      <div style={{backgroundColor:"rgb(244, 244, 244)"}}>
        <div className="mainComponentDiv">
          <h1 className="headerText">{greeting}</h1>
          <h4 className="headerText">{title}</h4>
          <p className="infoText">{info}</p>
          <MyComponent></MyComponent>
        </div>
      </div>
      <div />
    </>
  );
}

export default App;
