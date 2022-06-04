import { Title, Link } from './styles'

function AdmLinktitle(props){
    return(
        <Title>
            <Link>
                {props.title}
            </Link>
        </Title>
    )
}

export default AdmLinktitle