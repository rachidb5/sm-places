import { InputSearch } from './styles'
import Context from '../../context/context'
import { useContext } from 'react'

function SearchInput(){
    const { setTerm } = useContext(Context)
    return(
        <InputSearch
            role="search"
            type='text'
            onChange={({ target: { value } }) => {setTerm(value)}}
            placeholder="Busque por Nome, EAN ou Código"
        />
    )
}

export default SearchInput