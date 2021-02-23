import React from 'react';

export default function Quote({quote}){
    return(
        <div key={quote._id}>
            <p>{quote.quoteText}</p>
        </div>
    );
}