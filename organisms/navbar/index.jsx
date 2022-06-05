import { Nav, ImgContainer } from './styles'
import Img from 'next/image'
import smplaces from '../../assets/smplaces.png';
import SideMenu from '../../molecules/SideMenu';
import AdminLink from '../../molecules/adminLink/index';


function Navbar(){
    return (
        <Nav>
            <ImgContainer>
            <Img src={smplaces}/>
            </ImgContainer>
            <SideMenu />
            <AdminLink />
        </Nav>
    )
}

export default Navbar;