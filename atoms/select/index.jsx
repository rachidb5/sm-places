import { SelectInput } from "./styles"
const itemsTotal = [5,10,15,20,25,50]

function Select(){
    return(
        <SelectInput>
            {itemsTotal.map(i => <option key={i} value={i}>{i}</option>)}
        </SelectInput>
    )
}

export default Select