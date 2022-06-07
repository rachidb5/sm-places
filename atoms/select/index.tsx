import { SelectInput } from "./styles"
const itemsTotal = [5,10]
import { useContext } from 'react'
import Context from '../../context/context'

function Select(){
    const { setItemsNumber } = useContext(Context)

    return(
        <SelectInput
            role='select'
            onChange={({ target: { value } }) => {setItemsNumber(parseInt(value))}}>
            {itemsTotal.map(item => <option key={item} value={item}>{item}</option>)}
        </SelectInput>
    )
}

export default Select