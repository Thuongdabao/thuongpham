/// day la layout
import "../../../core/components/css/AdminLayout.css";

import avatar from "../../../assets/img/admin/avatar_admin.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AdminNav } from "../../../core/utils/Types";
import AdminNavigate from "../../../core/components/AdminNav";
import adminNavModel from "../../../models/AdminNavModel";
export function HeaderAdmin() {
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
const AdminLayout = (props) => {
  const navigate = useNavigate();
  return (
    <div className="row">
      <AdminNavigate links={adminNavModel.links}/>
      <div className="col-xl-9 col-md-9 tournament">
        <HeaderAdmin />
        {props.children}
      </div>
    </div>
  );
};

export function HorizonNavbar() {
  return (
    <div className="Horizontal">
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/Admin/Overview">Overview</Nav.Link>
            <Nav.Link to="/Admin/Brackets">Matches</Nav.Link>
            <Nav.Link to="">Results</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export function TableContent() {
  return (
    <div className="content__table">
      <table className="table__content">
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function Search() {
  return (
    <div className="content__search">
      <input
        type="text"
        name="Search"
        placeholder="Search"
        className="content__search--input"
      />
      <label htmlFor="Search" className="content__search--label">
        Keyword
      </label>
      <div className="icon--search">
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  );
}
export default AdminLayout;
