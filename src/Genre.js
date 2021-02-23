import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './Quote';

export default function Genre({ genre }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        let url = "https://quote-garden.herokuapp.com/api/v3/quotes";
        axios.get(url, {
            params: {
                genre: genre,
            }
        })
            .then(response => {
                setData(response.data.data);
            })
    }, [genre])
    return (
        <div >
            <div key={"genre"}>
                <h2>Genre : {genre}</h2>
                {data.length >= 1 && data.map(val => {
                    return(<Quote key={val._id} quote={val} />) 
                })}
            </div>
        </div>
    );
}