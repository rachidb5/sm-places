import Title from '../../atoms/title/index'
import Button from '../../atoms/button/index'
import { HeaderContainer } from './styles'

function Header(){
    return(
        <HeaderContainer>
            <Title />
            <Button />
        </HeaderContainer>
    )
}

export default Header