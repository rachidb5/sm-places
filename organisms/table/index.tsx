import { Container } from "./styles";
import SearchInput from "../../atoms/searchInput/index";
import TableMolecule from "../../molecules/table/index";
import TableMenu from "../../molecules/tableMenu/index";
import Context from "../../context/context";
import { useContext } from "react";

function TableOrganism(){
    const { setTerm } = useContext(Context)
    return (
        <Container>
            <TableMenu />
            <SearchInput placeholder="Busque por Nome, EAN ou Código" onChange={({ target: { value } }) => {setTerm(value)}}/>
            <TableMolecule />
        </Container>
    )
}

export default TableOrganism;