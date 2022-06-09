import { InputSearch } from './styles'

type Props = {
    onChange: void
    placeholder: string,
}
function SearchInput(props, { onChange}: Props){
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