import { Nav, ImgContainer } from './styles'
import SideMenu from '../../molecules/sideMenu/index';
import AdminLink from '../../molecules/adminLink/index';


function Navbar(){
    return (
        <Nav>
            <ImgContainer>
            <img 
            width="108px"
            height="18px"
            src="https://www.smplaces.com.br/blog/wp-content/uploads/2021/10/SM-Places-marketplaces.png"/>
            </ImgContainer>
            <SideMenu />
            <AdminLink />
        </Nav>
    )
}

export default Navbar;