import React, { useState, useEffect, ReactNode } from 'react';
import Context from './context';
import { Data } from '../services/api'

interface IProvider {
  children: ReactNode;
}

function Provider({ children }: IProvider) {
    const [data, setData] = useState(Data)
    const [pageNumber, setPageNumber] = useState(1)
    const [itemsNumber, setItemsNumber] = useState(5)
    const [term, setTerm] = useState('')

      const context = {
        data,
        setData,
        pageNumber,
        setPageNumber,
        itemsNumber,
        setItemsNumber,
        term,
        setTerm
      };
    
    return (
        <Context.Provider value={ context }>
          { children }
        </Context.Provider>
      );
}

export default Provider