import Select from '../../atoms/select';
import Pagination from '../../molecules/pagination';
import { FooterContainer, ItemsCountContainer, Label, Div } from './styles'

function footer(){
    return (
        <FooterContainer>
            <ItemsCountContainer>
                <Select />
                <Label>
                    Itens por página
                </Label>
            </ItemsCountContainer>
            <Pagination />
            <Div />
        </FooterContainer>
    )
}

export default footer;