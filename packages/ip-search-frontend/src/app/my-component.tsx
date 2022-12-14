import { useState, ChangeEvent } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ResponseType {
  country: string;
  city: string;
}
const emptySearchTerm = '';

export function MyComponent() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(emptySearchTerm);
  const [items, setItems] = useState<ResponseType>();
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const cancelValue = () => {
    setQuery(emptySearchTerm);
    setIsVisible(false);
  };

  const submit = () => {
    setIsLoading(false);
    setQuery(query);
    const url = `/api?ip=${query}`;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          query === emptySearchTerm ? setQuery(result.query) : query;
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
        <h2 className="errorMessage">invalid query for IP {query}</h2>
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
            <label className="label">City:</label>
            <label className="label">Country:</label>
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
              className="countryInputStyling"
              value={items?.country}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
