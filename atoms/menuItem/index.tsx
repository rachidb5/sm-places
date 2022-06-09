import { ReactElement } from 'react'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'
import { Li, LiButton, Span } from './styles'

type Props = {
    item: string,
    icon: IconType
}
function MenuItem(props: Props){
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