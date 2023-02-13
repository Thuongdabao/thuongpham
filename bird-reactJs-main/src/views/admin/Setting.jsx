import { observer } from "mobx-react-lite"
import AdminLayout from "../layout/admin/AdminLayout"

const Setting = (props)=>{
    return (
        <AdminLayout>
            <p>Setting</p>
        </AdminLayout>
    )
}
export default observer(Setting)