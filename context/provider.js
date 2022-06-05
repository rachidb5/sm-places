import React, { useState, useEffect } from 'react';
import Context from '../context/context';
import { Data } from '../services/api'

function Provider({ children }) {
    const [data, setData] = useState(Data)
    const [pageNumber, setPageNumber] = useState(1)


      const context = {
        data,
        setData,
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