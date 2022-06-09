import { IconType } from 'react-icons/lib'
import { Btn } from './styles'

type Props = {
    onClick: void
    icon: IconType,
}
function PaginationButton(props, { onClick }: Props){
    return(
        <Btn onClick={props.onClick}>
            <props.icon color='#C8C8C8'/>
        </Btn>
    )
}

export default PaginationButton