import { SelectInput } from "./styles"
const itemsTotal = [5,10]
import { useContext } from 'react'
import Context from '../../context/context'

type Props ={
    items: number[]
}
function Select(props: Props){
    const { setItemsNumber } = useContext(Context)

    return(
        <SelectInput
            role='select'
            onChange={({ target: { value } }) => {setItemsNumber(parseInt(value))}}>
            {props.items.map(item => <option key={item} value={item}>{item}</option>)}
        </SelectInput>
    )
}

export default Select