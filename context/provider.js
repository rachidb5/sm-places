import React, { useState } from 'react';
import Context from '../context/context';

function Provider({ children }) {
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(true)
 
      const context = {
        loading,
        setLoading,
        pageNumber,
        setPageNumber
      };
    
    return (
        <Context.Provider value={ context }>
          { children }
        </Context.Provider>
      );
}

export default Provider