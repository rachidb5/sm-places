import { Container } from "./styles";
import SearchInput from "../../atoms/searchInput/index";
import Tabela from "../../molecules/table/index";

function table(){
    return (
        <Container>
            <SearchInput />
            <Tabela />
        </Container>
    )
}

export default table;