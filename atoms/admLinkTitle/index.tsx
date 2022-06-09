import { Title, Link } from './styles'

type Props = {
    title: string
}
function AdmLinkTitle(props: Props){
    return(
        <Title>
            <Link>
                {props.title}
            </Link>
        </Title>
    )
}

export default AdmLinkTitle