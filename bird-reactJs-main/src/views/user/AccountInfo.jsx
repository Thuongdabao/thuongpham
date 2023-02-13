import UserLayout from "../layout/user/UserLayout";
import AvatarAccount from "../../assets/img/user/avatarAccount.png";
import { useState } from "react";
import classNames from "classnames";

function AccountInfo() {
  const [display, setDisplay] = useState(false);
  const [NotificationNone, setNotificationNone] = useState(false);

  const onSuccess = (props) => {
    setNotificationNone(!NotificationNone);
  };

  const onChangeDisplay = (props) => {
    console.log(props)
  }

  return (
    <>
      <UserLayout>
        <section>
          <div className="content">
            <div className="content__header">
              <div className="row">
                <div className="col-xl-12 col-md-12 content__header--title">
                  <span className="content__header--title-text">
                    Thông tin tài khoản
                  </span>
                </div>
              </div>
            </div>

            <div className="content__bodyAccount">
              <div className="content__bodyAccount--item">
                <div className="bodyAccount--item-Info">
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="account__Userinfo--avatar">
                        <img
                          src={AvatarAccount}
                          alt="AvatarAccount"
                          className="avatar__accountUser update--img"
                        />
                      </div>
                    </div>

                    <div className="col-xl-8">
                      <div className="account__Userinfo">
                        <div className="account__Userinfo--name text--heading">
                          <span>Nguyễn Văn A</span>
                        </div>

                        <div className="account__Userinfo--parameter">
                          <div className="row">
                            <div className="account__Userinfo--parameter--item">
                              <div className="text--heading-bold">
                                <span>Số chim</span>
                              </div>
                              <div className="text--number">
                                <span>20</span>
                              </div>
                            </div>

                            <div className="account__Userinfo--parameter--item">
                              <div className="text--heading-bold">
                                <span>Số giải tham gia</span>
                              </div>
                              <div className="text--number">
                                <span>20</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bodyAccount--item-menu">
                    <ul className="bodyAccount__MenuList">
                      <li className="bodyAccount__MenuList--item text--heading " onClick={()=>onChangeDisplay(display? !display:display)}>
                        Tổng quan
                        <span className="text-hr"></span>
                      </li>
                      <li className="bodyAccount__MenuList--item text--heading" onClick={()=>onChangeDisplay(display? !display:display)}>
                        Bảo mật
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="content__bodyAccount--item content__bodyAccount--item-text">
                <div className="content__bodyAccount--heading">
                  <div className="row">
                    <div className="col-xl-9 text--heading">
                      Thông tin tài khoản
                    </div>
                    <div className="col-xl-3 updateAccount">
                      <button className="btn--Account">Update</button>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="content__bodyAccount--item-body">
                  <div className="content__bodyAccount--information">
                    <div className="information--name information--item">
                      <div className="row">
                        <div className="col-xl-5">
                          <span>Username</span>
                        </div>

                        <div className="col-xl-7">anguyena</div>
                      </div>
                    </div>

                    <div className="information--email information--item">
                      <div className="row">
                        <div className="col-xl-5">
                          <span>Email</span>
                        </div>

                        <div className="col-xl-7">Nguyena@gmail.com</div>
                      </div>
                    </div>

                    <div className="information--phone information--item">
                      <div className="row">
                        <div className="col-xl-5">
                          <span>Số điện thoại</span>
                        </div>

                        <div className="col-xl-7">0919782734</div>
                      </div>
                    </div>

                    <div className="information--address information--item">
                      <div className="row">
                        <div className="col-xl-5">
                          <span>Thành phố sinh sống</span>
                        </div>

                        <div className="col-xl-7">TP. HCM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content__bodyAccount--item content__bodyAccount--item-text">
                <div className="content__bodyAccount--heading">
                  <div className="text--heading">Bảo mật</div>
                </div>
                <hr />

                <div className="content__bodyAccount--item-body">
                  <div className="content__bodyAccount--information">
                    <div className="information--Email information--item">
                      <div className="row">
                        <div className="col-xl-12">
                          <span>Email</span>
                        </div>

                        <div className="col-xl-7">
                          <div className="securityChange">
                            Nguyena@gmail.com
                          </div>
                        </div>

                        <div className="col-xl-5">
                          <button className="btn--Account">Đổi email</button>
                        </div>
                      </div>
                    </div>

                    <div className="information--Password information--item">
                      <div className="row">
                        <div className="col-xl-12">
                          <span>Mật khẩu</span>
                        </div>

                        <div className="col-xl-7 ">
                          <div className="securityChange">
                            *******************
                          </div>
                        </div>

                        <div className="col-xl-5">
                          <button className="btn--Account">Đổi mật khẩu</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content__bodyAccount--item content__bodyAccount--item-text">
                <div className="content__bodyAccount--heading">
                  <div className="text--heading">Thông tin tài khoản</div>
                </div>
                <hr />

                <div className="content__bodyAccount--item-body">
                  <div className="content__bodyAccount--information">
                    <div className="information--name information--item">
                      <div className="row">
                        <div className="col-xl-5">
                          <span>Username</span>
                        </div>

                        <div className="col-xl-7">
                          <input
                            type="text"
                            placeholder="anguyena"
                            name="username"
                            className="information--item-input"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="information--phone information--item">
                      <div className="row">
                        <div className="col-xl-5">
                          <span>Số điện thoại</span>
                        </div>

                        <div className="col-xl-7">
                          <input
                            type="text"
                            placeholder="0919782734"
                            name="phone"
                            className="information--item-input"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="information--address information--item">
                      <div className="row">
                        <div className="col-xl-5">
                          <span>Thành phố sinh sống</span>
                        </div>

                        <div className="col-xl-7">
                          <input
                            type="text"
                            placeholder="TP.HCM"
                            name="address"
                            className="information--item-input"
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="line" />
                    <div className="content__bodyAccount--groupBtn">
                      <div className="row">
                        <div className="groupBtn-cancel groupBtn-item">
                          <button className="btn--Account">Cancel</button>
                        </div>
                        <div className="groupBtn-update groupBtn-item">
                          <button
                            className="btn--Account"
                            onClick={() => onSuccess()}
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </UserLayout>
      <div
        className={classNames(
          { NotificationNone: !NotificationNone },
          "Notification NotificationSuccess"
        )}
      >
        <div className="Notification-item ">
          <div className="row Notification-item-group NotificationAccount">
            <div className="col-xl-12 Notification-item-group-col NotificationAccount-Success">
              <div className="content__tour--general">
                <div className="content__tour--general-heading">
                  <span>Cập nhật thông tin thành công</span>
                </div>
                <div className="content__tour-general-group">
                  <button className="btn--Account" onClick={() => onSuccess()}>
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Notification NotificationNone">
        <div className="Notification-item">
          <div className="row Notification-item-group">
            <div className="col-xl-12 Notification-item-group-col">
              <div className="content__tour--general">
                <div className="content__tour--general-heading text-heading14">
                  <span>Đổi mật khẩu</span>
                </div>
                <div className="content__tour-general-group">
                  <div className="tour--general-group-item">
                    <div className="tour--info">
                      <input
                        type="text"
                        name="Form"
                        placeholder="Form"
                        className="tour--info-input"
                      />
                      <label htmlFor="Form" className="tour--info-label">
                        Form
                      </label>
                    </div>
                  </div>

                  <div className="tour--general-group-item">
                    <div className="tour--info">
                      <input
                        type="text"
                        name="Voice"
                        placeholder="Voice"
                        className="tour--info-input"
                      />
                      <label
                        htmlFor="Voice"
                        className="tour--info-label label-width"
                      >
                        Voice
                      </label>
                    </div>
                  </div>

                  <div className="tour--general-group-item">
                    <div className="tour--info">
                      <input
                        type="text"
                        name="Posture"
                        placeholder="Posture"
                        className="tour--info-input"
                      />
                      <label
                        htmlFor="Posture"
                        className="tour--info-label label-width"
                      >
                        Posture
                      </label>
                    </div>
                  </div>

                  <div className="row tour--detail-group-item">
                    <div className="row">
                      <div className="col-xl-4">
                        <button
                          className="detail-btnCancel detail-text"
                          onClick={() => onSuccess()}
                        >
                          Lưu lại
                        </button>
                      </div>

                      <div className="col-xl-3">
                        <button className="detail-btnSave detail-text">
                          Hủy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Notification NotificationNone">
        <div className="Notification-item Notification-User">
          <div className="row Notification-item-group">
            <div className="col-xl-12 Notification-item-group-col content__notification">
              <div className="content__notification--list">
                <div className="Notification-User-heading text-heading14">Thông báo</div>
                <button className="CloseNotifi">X</button>
                <hr />

                <div className="content__notification--list-item">
                  <div className="list-item-heading ">
                    <div className="row">
                      <div className="col-xl-2">
                        <div className="notificationUser-avatar"></div>
                      </div>
                      <div className="col-xl-10">
                        <div className="notificationUser-info">
                          <div className="text-heading14">
                            Cám ơn bạn đã đồng hành
                          </div>
                          <div className="text-time">15/1/2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-item-content">
                    <div className="list--content-text">
                      <span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        including versions of Lorem Ipsum.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="content__notification--list-item">
                  <div className="list-item-heading ">
                    <div className="row">
                      <div className="col-xl-2">
                        <div className="notificationUser-avatar"></div>
                      </div>
                      <div className="col-xl-10">
                        <div className="notificationUser-info">
                          <div className="text-heading14">
                            Cám ơn bạn đã đồng hành
                          </div>
                          <div className="text-time">15/1/2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-item-content">
                    <div className="list--content-text">
                      <span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        including versions of Lorem Ipsum.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="content__notification--list-item">
                  <div className="list-item-heading ">
                    <div className="row">
                      <div className="col-xl-2">
                        <div className="notificationUser-avatar"></div>
                      </div>
                      <div className="col-xl-10">
                        <div className="notificationUser-info">
                          <div className="text-heading14">
                            Cám ơn bạn đã đồng hành
                          </div>
                          <div className="text-time">15/1/2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-item-content">
                    <div className="list--content-text">
                      <span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        including versions of Lorem Ipsum.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountInfo;
