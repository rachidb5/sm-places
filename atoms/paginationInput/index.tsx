import { PageNumberInput } from './styles'

type Props ={
    pageNumber: number,
}
function PaginationInput(props: Props){
    return(
        <PageNumberInput value={props.pageNumber}/>
    )
}

export default PaginationInput