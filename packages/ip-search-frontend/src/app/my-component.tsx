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
            setError(error);
            setIsLoading(true);
        }
      );
  };

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoading) {
    return (
        <div className="App">
          <LoadingSpinner />
        </div>
      );
  } else {
    return (
      <div>
        <input readOnly value={items?.country}></input>
        <br></br>
        <input readOnly value={items?.city}></input>
        <input
          maxLength={15}
          value={query}
          onChange={(e) => handleChange(e)}
        ></input>
        <button  onClick={submit}>Suchen</button>
      </div>
    );
    
  }
}
