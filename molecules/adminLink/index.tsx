import { AdminLinkContainer, Link } from "./styles"
import { RiUserSettingsFill } from "react-icons/ri"
import AdmLinkTitle from "../../atoms/admLinkTitle/index"

function AdminLink(){
    return(
        <AdminLinkContainer>
            <RiUserSettingsFill />
             <AdmLinkTitle title="Administrador"/>
        </AdminLinkContainer>
    )
}

export default AdminLink