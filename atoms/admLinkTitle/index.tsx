import { Title, Link } from './styles'

function AdmLinkTitle(props){
    return(
        <Title>
            <Link>
                {props.title}
            </Link>
        </Title>
    )
}

export default AdmLinkTitle