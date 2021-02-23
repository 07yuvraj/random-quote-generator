import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './Quote';
import Author from './Author';
import Header from './Header';
import Genre from './Genre';
import { Link, Route } from 'react-router-dom';

function App() {
  const [state, setState] = useState(false);
  const [data, setData] = useState([]);
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  useEffect(() => {
    let url = "https://quote-garden.herokuapp.com/api/v3/quotes";
    let random = Math.floor(Math.random() * 72000);
    axios.get(url, {
      params: {
        limit: 1,
        author: " ",
        genere: " ",
        page: random,
      }
    })
      .then(response => {
        setData(response.data.data);
      })
  }, [state]);
  return (
    <div className="App">
      <Route exact path='/'>
        <Header state={state} setState={setState} />
        {data.length >= 1 && data.map(val => {
          return(
            <div key={val._id}>
              <Quote key={val._id} quote={val} />
              <p>Author : {val.quoteAuthor}<br />Genre : {val.quoteGenre}</p>
              <div>
                <h2>Find Quotes according to :
              <Link to="/author">
                    <div onClick={() => {
                      setAuthor(val.quoteAuthor)
                    }}>
                      {val.quoteAuthor}
                    </div>
                  </Link>
                  <Link to="/genre">
                    <div onClick={() => {
                      setGenre(val.quoteGenre)
                    }}>{val.quoteGenre}</div>
                  </Link>
                </h2>
              </div>

            </div>
          )
        })}
      </Route>
      <Route exact path="/author">
        <Link to="/"><Header state={state} setState={setState} /></Link>
        <Author authorname={author} />
      </Route>
      <Route exact path="/genre">
        <Link to="/"><Header state={state} setState={setState} /></Link>
        <Genre genre={genre} />
      </Route>
    </div>
  );
}

export default App;
