import React, { useState } from 'react';
import Context from '../context/context';

function Provider({ children }) {
    const [data, setData] = useState([]);
 
      const context = {
        data,
        setData,
      };
    
    return (
        <Context.Provider value={ context }>
          { children }
        </Context.Provider>
      );
}

export default Provider