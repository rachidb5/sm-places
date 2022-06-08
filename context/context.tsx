import React from "react";

export interface IProducts{
    id: number;
    name: string;
    price: number;
    code: string;
    status:boolean;
    quantity: number;
    categories: string;
    image: string;
}

interface IContext {
    data: IProducts[];
    pageNumber: number;
    itemsNumber: number;
    term: string;
    setData:(param: IProducts[]) => void;
    setItemsNumber:(param: number) => void;
    setPageNumber:(param: number) => void;
    setTerm:(param: string) => void;
  }

const Context = React.createContext({}  as IContext);

export default Context;
