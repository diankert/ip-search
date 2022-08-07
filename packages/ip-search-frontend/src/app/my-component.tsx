import { useState, useEffect, ChangeEvent } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ResponseType {
  country: string;
  city: string;
}

export function MyComponent() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setquery] = useState('');
  const [items, setItems] = useState<ResponseType>();
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setquery(e.target.value);
  };

  const cancelValue = () =>{
    setquery("");
    setIsVisible(false);
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
          setIsLoading(true);
          setIsVisible(true);
        },
        (error) => {
          setError(true);
          setError(error);
          setIsVisible(false);
        }
      );
  };

  if (error) {
    return (
      <div className="myComponentStyling">
        <h2 className="h2Tag">invalid query for IP {query}</h2>
      </div>
    );
  } else if (!isLoading) {
    return (
      <div className="App">
        <LoadingSpinner />
      </div>
    );
  } else {
    return (
      <div className="myComponentStyling">
        <div className="warpperResultDiv">
          <input
            className="searchInputStyling"
            value={query}
            onChange={(e) => handleChange(e)}
            minLength={7}
            maxLength={15}
            required
            pattern="^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$"
          ></input>
          <button className="buttonStyling" onClick={submit}>
            Search
          </button>
          <button className="buttonStyling" onClick={cancelValue}>
          Cancel
            </button>
        </div>
        <div className="mainResultDiv">
          <div
            className="labelDiv"
            style={{ visibility: isVisible ? 'visible' : 'hidden' }}
          >
            <label
              style={{
                fontFamily: 'Arial',
                fontWeight: 'bold',
                backgroundColor: 'rgb(233, 198, 83)',
                borderRadius: '4px',
                margin: '25px 25px 25px 0',
                padding: '6px',
                width: '100px',
                textAlign: 'center',
              }}
            >
              city:
            </label>

            <label
              style={{
                fontFamily: 'Arial',
                fontWeight: 'bold',
                backgroundColor: 'rgb(233, 198, 83)',
                borderRadius: '4px',
                margin: '25px 25px 25px 0',
                padding: '6px',
                width: '100px',
                textAlign: 'center',
              }}
            >
              Country:
            </label>
          </div>
          <div
            className="labelDiv"
            style={{ visibility: isVisible ? 'visible' : 'hidden' }}
          >
            <input
              disabled
              readOnly
              className="cityInputStyling"
              value={items?.city}
            ></input>
            <input
              disabled
              readOnly
              className="contryInputStyling"
              value={items?.country}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
