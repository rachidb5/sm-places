import MenuItem from "../../atoms/menuItem/index";
import SubMenuItem from '../../atoms/subMenuItem/index';
import { Ul } from './styles'
import { MdSell } from 'react-icons/md'
import { FiPercent } from 'react-icons/fi'


function SideMenu(){
    return(
        <Ul>
            <MenuItem icon={MdSell} item='Catálogo'/>
            <ul>
                <SubMenuItem item='Produtos'/>
                <SubMenuItem item='Categoria'/>
                <SubMenuItem item='Atributo'/>
            </ul>
            <MenuItem  icon={FiPercent} item='Comissões'/>
        </Ul>
    )
}

export default SideMenu;