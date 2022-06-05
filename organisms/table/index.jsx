import { Container } from "./styles";
import SearchInput from "../../atoms/searchInput/index";
import Tabela from "../../molecules/table/index";
import TableMenu from "../../molecules/tableMenu/index";

function table(){
    return (
        <Container>
            <TableMenu />
            <SearchInput />
            <Tabela />
        </Container>
    )
}

export default table;