import { Btn } from './styles'

type Props = {
    text: string,
    onClick: void
}

function Button(props, { onClick}: Props){
    return(
        <Btn type='button' onClick={props.onClick}>
            {props.text}
        </Btn>
    )
}

export default Button