
import "../../../core/components/css/AdminLayout.css";
import "../../../core/components/css/UserLayout.css";
import logo from "../../../assets/img/admin/logo_bird.png";
import avatar from "../../../assets/img/admin/avatar_admin.png";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router";

export function NavUser() {
  return (
    <div className="col-xl-3 col-md-3 col-0 nav">
      <nav className="nav__group">
        <div className="nav--logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>

        <div className="menu">
          <div className="menu__general">
            <div className="menu--title">GENERAL</div>
            <ul className="menu__list"></ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export function HeaderUser() {
  return (
    <header className="header">
      <div className="header__group">
        <div className="row header__group--list">
          <div className="col-xl-1 col-md-1 col-1 icon-notify header__group--item">
            <i className="fa-solid fa-bell "></i>
            <div className="dots-red"></div>
          </div>
          <div className="icon-user col-xl-1 col-md-1 col-1 header__group--item">
            <i className="fa-solid fa-user-group"></i>
          </div>
          <div className="account col-xl-1 col-md-1 col-1 header__group--item">
            <img src={avatar} alt="avatar" className="account-img" />
          </div>
        </div>
      </div>
    </header>
  );
}

const UserLayout = (props) => {
  const navigate = useNavigate();
  const user = {
    rule: "user",
  };
  useLayoutEffect(() => {
    //check rule here
    // neu la admin
    if (user.rule !== "user") {
      navigate("/UserHome");
    }
  }, []);
  return (
    <div className="row">
      <NavUser />
      <div className="col-xl-9 col-md-9 tournament">
        <HeaderUser />
        {props.children}
      </div>
    </div>
  );
};

export default UserLayout;
