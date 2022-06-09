import { TitleH1 } from './styles'

type Props = {
    title: string
}
function Title(props: Props){
    return (
        <TitleH1>
            {props.title}
        </TitleH1>
    )
}

export default Title;