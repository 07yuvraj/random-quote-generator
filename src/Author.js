import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './Quote';

export default function Author({ authorname }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        let url = "https://quote-garden.herokuapp.com/api/v3/quotes";
        axios.get(url, {
            params: {
                author: authorname,
            }
        })
            .then(response => {
                setData(response.data.data);
            })
    }, [authorname])
    return (
        <div key={"authorlist"}>
            <h2>Author : {authorname}</h2>
            {data.length >= 1 && data.map(val => {
                return(<Quote key={val._id} quote={val} />) 
            })}
        </div>
    );
}