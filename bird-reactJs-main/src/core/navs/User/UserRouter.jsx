import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountInfo from "../../../views/user/AccountInfo";
import "../../../core/components/css/UserLayout.css";
import "../../../core/components/css/global.css"
import BirdList from "../../../views/user/BirdList";
import BirdRegister from "../../../views/user/BirdRegister";

function UserRouter() {
    return ( 
        <BrowserRouter>
          <Routes>
            <Route path="/AccountInfo" element={<AccountInfo />} />
            <Route path="/BirdList" element={<BirdList />} />
            <Route path="/BirdRegister" element={<BirdRegister />} />
          </Routes>
      </BrowserRouter>
     );
}

export default UserRouter;