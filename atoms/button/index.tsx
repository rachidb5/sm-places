import { Btn } from './styles'

function Button(props){
    return(
        <Btn type='button' onClick={props.onClick}>
            {props.text}
        </Btn>
    )
}

export default Button