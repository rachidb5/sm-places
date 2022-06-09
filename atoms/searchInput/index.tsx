import { InputSearch } from './styles'

function SearchInput(props){
    return(
        <InputSearch
            role="search"
            type='text'
            onChange={props.onChange}
            placeholder={props.placeholder}
        />
    )
}

export default SearchInput