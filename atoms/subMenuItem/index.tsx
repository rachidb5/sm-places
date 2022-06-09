import { Li, LiButton } from './styles'

type Props = {
    item: string
}
function SubMenuItem(props: Props){
    return(
        <Li>
            <LiButton>
                {props.item}
            </LiButton>
        </Li>
    )
}

export default SubMenuItem
