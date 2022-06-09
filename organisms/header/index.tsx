import Title from '../../atoms/title/index'
import Button from '../../atoms/button/index'
import { HeaderContainer } from './styles'

function Header(){
    return(
        <HeaderContainer>
            <Title title="produtos"/>
            <Button text="Novo Produto" onCLick={() => console.log('funciona')}/>
        </HeaderContainer>
    )
}

export default Header