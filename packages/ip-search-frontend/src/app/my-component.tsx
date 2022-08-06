import { useState, useEffect, ChangeEvent } from 'react';
import LoadingSpinner from "./LoadingSpinner";

interface ResponseType {
  country: string;
  city: string;
}

export function MyComponent() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [query, setquery] = useState('');
  const [items, setItems] = useState<ResponseType>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setquery(e.target.value);
  };

  const submit = () => {
    setIsLoading(false);
    setquery(query);
    const url = `/api?ip=${query}`;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoading(true)
          console.log('Result: ', result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            setIsLoading(true);
            setError(error);
        }
      );
  };

  if (error) {
    return <div>Error</div>;
  } else if (!isLoading) {
    return (
        <div className="App">
          <LoadingSpinner/>
        </div>
      );
  } else {
    return (
      <div>
        <input className='searchInputStyling' maxLength={15} value={query} onChange={(e) => handleChange(e)}></input>
        <button className='buttonStyling' onClick={submit}>Suchen</button>
        <br></br>
        <br></br>
        <br></br>
        <label style={{fontFamily: "Arial", fontWeight: "lighter", marginRight: "30px", padding:"7px", paddingRight: "10px", backgroundColor: "rgb(233, 198, 83)", borderRadius: "4px"}}>city:</label>
        <input className='inputStyling' value={items?.city}></input>
        <br></br>
        <label style={{fontFamily: "Arial", fontWeight: "lighter", marginRight: "9px", padding:"7px", backgroundColor: "rgb(233, 198, 83)", borderRadius: "4px"}}>Contry:</label>
        <input className='inputStyling' value={items?.country}></input>
      </div>
    );
    
  }
}
