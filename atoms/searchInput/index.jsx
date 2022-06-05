import { InputSearch } from './styles'
import Context from '../../context/context'
import { useContext, useEffect } from 'react'

function SearchInput(){
    const { setTerm } = useContext(Context)
    return(
        <InputSearch
            onChange={({ target: { value } }) => {setTerm(value)}}
            placeholder="Busque por Nome, EAN ou Código"
        />
    )
}

export default SearchInput