import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const API_URL = 'https://type.fit/api/quotes';
  const [quote, setQuote] = useState([0]);
  const [quotes, setQuotes] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  
  useEffect = (() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data')
          const data = await response.json();
          console.log(data);
          setFetchError(null);
          setQuotes(data);
        
        
      } catch (err) {
        setFetchError(err.message)
      }
    }

    fetchItems();

  }, [])

  

  



  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <div className="wrapper">
        <div className="container">
          <button>New Quote</button>
          <h3>What the beep? What the beep? What the beep? What the beep?</h3>
          <p>-Ryan Gartner</p>
        </div>
      </div>
    </div>
  );
}

export default App;
