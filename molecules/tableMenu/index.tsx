import { listenerCount } from 'node:stream'
import { Nav, Anchor } from './styles'

type Props = {
    list: string[]
}
function TableMenu(props: Props){
    return(
        <Nav>
            {props.list.map(item => <Anchor key={item}>{item}</Anchor>)}
        </Nav>
    )
}

export default TableMenu