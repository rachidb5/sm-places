import { Li, LiButton } from './styles'

function SubMenuItem(props){
    return(
        <Li>
            <LiButton>
                {props.item}
            </LiButton>
        </Li>
    )
}

export default SubMenuItem
