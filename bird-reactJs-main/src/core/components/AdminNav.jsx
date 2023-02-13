import { observer } from "mobx-react-lite";
import { useLayoutEffect } from "react";
import {Link} from 'react-router-dom'
import logo from "../../assets/img/admin/logo_bird.png";
import "../../core/components/css/AdminLayout.css";
import adminNavModel from "../../models/AdminNavModel";
function AdminNavigate({links}) {
    const handleSetActive  = (id)=>{
        adminNavModel.setActive(id)
    }
    useLayoutEffect(()=>{
        console.log(adminNavModel.active)
    },[adminNavModel.active])
    return (
      <div className="col-xl-3 col-md-3 col-0 nav">
        <nav className="nav__group">
          <div className="nav--logo">
            <img src={logo} alt="logo" className="logo-img" />
          </div>
  
          <div className="menu">
            {links.map((parent,index)=>{
                return (
                  <div key={parent?.id} className="menu__general">
                    <div className="menu--title">{parent?.title}</div>
                    <ul className="menu__list">
                        {parent?.children.length > 0 && 
                          parent?.children.map((val)=>{
                            return (
                              <li key={val?.id} onClick={()=>{handleSetActive(val?.id)}} className={`menu__list--item ${adminNavModel.active === val.id ? 'active' : ''} text__list--style`}>
                                <Link key={val?.id} to={val?.to} className="text-link menu__list--item-link">
                                  {val?.title}
                                </Link>
                              </li>
                            )
                          })
                        }
                    </ul>
                  </div>
                )
            })}
          </div>
        </nav>
      </div>
    );
  }
  export default observer(AdminNavigate)