import { AdminLinkContainer, Link } from "./styles"
import { RiUserSettingsFill } from "react-icons/ri"
import AdmLinktitle from "../../atoms/admLinkTitle/index"

function AdminLink(){
    return(
        <AdminLinkContainer>
            <RiUserSettingsFill />
             <AdmLinktitle title="Administrador"/>
        </AdminLinkContainer>
    )
}

export default AdminLink