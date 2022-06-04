import { Li, LiButton, Span } from './styles'

function MenuItem(props){
    return(
        <Li>
            {console.log(props)}
            <LiButton>
                <props.icon />
                <Span>
                {props.item}
                </Span>
            </LiButton>
        </Li>
    )
}
export default MenuItem