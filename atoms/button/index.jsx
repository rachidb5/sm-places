import { Btn } from './styles'

function Button(){
    return(
        <Btn type='button' onClick={() => console.log("teste")}>
            Novo Produto
        </Btn>
    )
}

export default Button