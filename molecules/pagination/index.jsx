import PaginationInput from "../../atoms/paginationInput/index";
import PaginationButton from "../../atoms/paginationButton/index";
import { PaginationContainer } from "./styles";
import { BsChevronDoubleLeft } from 'react-icons/bs'
import { BsChevronDoubleRight} from 'react-icons/bs'

function Pagination(){
    return(
        <PaginationContainer>
            <PaginationButton icon={BsChevronDoubleLeft}/>
            <PaginationInput />
            <PaginationButton icon={BsChevronDoubleRight}/>
        </PaginationContainer>
    )
}

export default Pagination