import React from 'react';

export default function Header({state,setState}){
    const handlestate=()=>{
        setState((prevState) => !prevState)
      }
    return(
        <button onClick={handlestate}>Refresh</button>
    );
}
