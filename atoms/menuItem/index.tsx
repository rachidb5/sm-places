import { Li, LiButton, Span } from './styles'

function MenuItem(props){
    return(
        <Li>
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