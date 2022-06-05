import { SelectInput } from "./styles"
const itemsTotal = [5,10]
import { useContext, useEffect } from 'react'
import Context from '../../context/context'

function Select(){
    const { itemsNumber, setItemsNumber, data, setData } = useContext(Context)

    return(
        <SelectInput  
            onChange={({ target: { value } }) => {setItemsNumber(parseInt(value))}}>
            {itemsTotal.map(i => <option key={i} value={i}>{i}</option>)}
        </SelectInput>
    )
}

export default Select