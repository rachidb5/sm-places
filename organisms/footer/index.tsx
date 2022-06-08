import Select from '../../atoms/select/index';
import Pagination from '../../molecules/pagination/index';
import { FooterContainer, ItemsCountContainer, Label, Div } from './styles'

function Footer(){
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

export default Footer;