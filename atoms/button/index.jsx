import { Btn } from './styles'

function Button(){
    return(
        <Btn type='submit' onClick={() => console.log("teste")}>
            Novo Produto
        </Btn>
    )
}

export default Button