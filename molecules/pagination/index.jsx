import PaginationInput from "../../atoms/paginationInput/index";
import PaginationButton from "../../atoms/paginationButton/index";
import { PaginationContainer } from "./styles";
import { BsChevronDoubleLeft } from 'react-icons/bs'
import { BsChevronDoubleRight} from 'react-icons/bs'
import React, { useContext } from 'react'
import Context from '../../context/context'

function Pagination(){
    const { pageNumber, setPageNumber, itemsNumber, data } = useContext(Context)
    return(
        <PaginationContainer>
            <PaginationButton 
                icon={BsChevronDoubleLeft}
                onClick={() => {pageNumber > 1 ? setPageNumber(pageNumber-1):null}}
                />
            <PaginationInput pageNumber={pageNumber}/>
            <PaginationButton 
                icon={BsChevronDoubleRight} 
                onClick={() => {pageNumber < (data.length/itemsNumber) ? setPageNumber(pageNumber+1):null}}
            />
        </PaginationContainer>
    )
}

export default Pagination