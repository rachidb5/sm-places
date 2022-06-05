import { TD, TDImg, Tr } from './styles'
import Img from 'next/image'

function TableLine(props){
    return(
        <Tr>
            <TD><input type="checkbox"/></TD>
            <TDImg><img src={props.image} width="35px" height="35px"/></TDImg>
            <TD>{props.name}</TD>
            <TD>{props.estoque}</TD>
            <TD>{props.codigo}</TD>
            <TD>{props.categoria}</TD>
            <TD>{props.status}</TD>
        </Tr>
    )
}

export default TableLine