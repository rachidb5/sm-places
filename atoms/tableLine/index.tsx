import { TD, TDImg, Tr } from './styles'

function TableLine(props){
    return(
        <Tr>
            <TD><input type="checkbox" role="checkbox"/></TD>
            <TDImg><img src={props.image} width="35px" height="35px"/></TDImg>
            <TD  role="name">{props.name}</TD>
            <TD>{props.quantity}</TD>
            <TD  role="code">{props.code}</TD>
            <TD role="category">{props.category}</TD>
            <TD>{props.status}</TD>
        </Tr>
    )
}

export default TableLine