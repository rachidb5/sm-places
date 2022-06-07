import { Container } from "./styles";
import SearchInput from "../../atoms/searchInput/index";
import TableMolecule from "../../molecules/table/index";
import TableMenu from "../../molecules/tableMenu/index";

function TableOrganism(){
    return (
        <Container>
            <TableMenu />
            <SearchInput />
            <TableMolecule />
        </Container>
    )
}

export default TableOrganism;