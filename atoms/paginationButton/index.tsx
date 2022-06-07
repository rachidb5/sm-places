import { Btn } from './styles'
function PaginationButton(props){
    return(
        <Btn onClick={props.onClick}>
            <props.icon color='#C8C8C8'/>
        </Btn>
    )
}

export default PaginationButton