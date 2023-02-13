import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../../views/client/Home'
import Login from '../../views/client/Login'
import Register from '../../views/client/Register'
import Tournament from '../../views/admin/Tournament'
import Match from '../../views/admin/Match'
import RulerAdmin from '../../views/admin/Ruler'
import BirdDetail from '../../views/admin/BirdDetail'
import Birds from '../../views/admin/Birds'
import Users from '../../views/admin/Users'
import Brackets from '../../views/admin/Brackets'
import Overview from '../../views/admin/Overview'
import MatchDetail from '../../views/admin/MatchDetail'
import CreateTour from '../../views/admin/CreateTour'
import UserDetail from '../../views/admin/UserDetail'
import Setting from '../../views/admin/Setting'

const ClientRouter = (props)=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
              
                <Route path="/Admin" element={<Tournament />} />
                <Route path="/Admin/Match" element={<Match />} />
                <Route path="/Admin/Ruler" element={<RulerAdmin />}/>
                <Route path="/Admin/Birds" element={<Birds />}/>
                <Route path="/Admin/Users" element={<Users />}/>
                <Route path="/Admin/Brackets" element={<Brackets />}/>
                <Route path="/Admin/Overview" element={<Overview />}/>
                <Route path="/Admin/BirdDetail" element={<BirdDetail />}/>
                <Route path="/Admin/CreateTour" element={<CreateTour />}/>
                <Route path="/Admin/UserDetail" element={<UserDetail />}/>
                <Route path="/Admin/MatchDetail" element={<MatchDetail />}/>
                <Route path="/Admin/Settings" element={<Setting />}/>
            </Routes>
      </BrowserRouter>
    )
}

export default ClientRouter