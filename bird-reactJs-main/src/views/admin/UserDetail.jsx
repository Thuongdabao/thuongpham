import AdminLayout from "../layout/admin/AdminLayout";
import avatarBird from "../../assets/img/admin/avatarbird.png";
import avatar2Bird from "../../assets/img/admin/avatar2bird.png";
import image_champion from "../../assets/img/admin/champion.png";

function UserDetail() {
  return (
    <AdminLayout>
      <section>
        <div className="content">
          <div className="content__header">
            <div className="content__header--title">
              <span className="content__header--title-text">
                Organize a Tournament
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 ">
              <div className="content__statistical">
                <div className="content__statistical-item"></div>
              </div>
              <div className="content__birds">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="champion">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-5 champion__heading--introduce-img">
                              <img
                                src={image_champion}
                                alt="champion"
                                className="champion-img upload-img"
                              />
                            </div>

                            <div className="col-xl-7  champion__heading--introduce-text">
                              <div className="champion--introduce-heading">
                                <span>Chào mào Đại Việt</span>
                              </div>
                              <div className="champion--introduce-text">
                                <span>Thuộc loại chào mào Bông</span>
                              </div>
                              <div className="champion--introduce-month">
                                <i className="fa-solid fa-heart"></i>
                                14 months
                              </div>
                              <div className="champion--introduce-kilo">
                                <i className="fa-solid fa-heart"></i>
                                0.3kg
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <div className="champion--from-text champion-userdetail">
                        Đã đấu qua 30 trận đấu với 16 trận được đi tiếp
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="champion">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-5 champion__heading--introduce-img">
                              <img
                                src={image_champion}
                                alt="champion"
                                className="champion-img upload-img"
                              />
                            </div>

                            <div className="col-xl-7  champion__heading--introduce-text">
                              <div className="champion--introduce-heading">
                                <span>Chào mào Đại Việt</span>
                              </div>
                              <div className="champion--introduce-text">
                                <span>Thuộc loại chào mào Bông</span>
                              </div>
                              <div className="champion--introduce-month">
                                <i className="fa-solid fa-heart"></i>
                                14 months
                              </div>
                              <div className="champion--introduce-kilo">
                                <i className="fa-solid fa-heart"></i>
                                0.3kg
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <div className="champion--from-text champion-userdetail champion-userdetail-nolist">
                        Không có lịch sử thi đấu
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="champion">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-5 champion__heading--introduce-img">
                              <img
                                src={image_champion}
                                alt="champion"
                                className="champion-img upload-img"
                              />
                            </div>

                            <div className="col-xl-7  champion__heading--introduce-text">
                              <div className="champion--introduce-heading">
                                <span>Chào mào Đại Việt</span>
                              </div>
                              <div className="champion--introduce-text">
                                <span>Thuộc loại chào mào Bông</span>
                              </div>
                              <div className="champion--introduce-month">
                                <i className="fa-solid fa-heart"></i>
                                14 months
                              </div>
                              <div className="champion--introduce-kilo">
                                <i className="fa-solid fa-heart"></i>
                                0.3kg
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <div className="champion--from-text champion-userdetail ">
                        Đã đấu qua 30 trận đấu với 16 trận được đi tiếp
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="champion">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-5 champion__heading--introduce-img">
                              <img
                                src={image_champion}
                                alt="champion"
                                className="champion-img upload-img"
                              />
                            </div>

                            <div className="col-xl-7  champion__heading--introduce-text">
                              <div className="champion--introduce-heading">
                                <span>Chào mào Đại Việt</span>
                              </div>
                              <div className="champion--introduce-text">
                                <span>Thuộc loại chào mào Bông</span>
                              </div>
                              <div className="champion--introduce-month">
                                <i className="fa-solid fa-heart"></i>
                                14 months
                              </div>
                              <div className="champion--introduce-kilo">
                                <i className="fa-solid fa-heart"></i>
                                0.3kg
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <div className="champion--from-text champion-userdetail champion-userdetail-nolist">
                        Không có lịch sử thi đấu
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="content__body--tour--general">
                <div className="content__information">
                  <div className="content__information--active">
                    <span className="content__information--active-attach">
                      ACTIVE
                    </span>
                  </div>
                  <div className="content__information--avatar">
                    <div className="content__information--avatar-img">
                      <div className="avatar--info">
                        <img
                          src={avatarBird}
                          alt="avatarBird"
                          className="avatar--info-img"
                        />
                      </div>
                      <div className="avatar--info-border"></div>
                    </div>

                    <div className="content__information--avatar-text">
                      <div className="avatar-img-info">
                        <span>
                          Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="content__information--banned">
                    <div className="row">
                      <div className="col-xl-8">
                        <div className="content__information--banned-heading">
                          <span>Banned</span>
                        </div>
                        <div className="content__information--banned-text">
                          <span>Apply will disable this bird</span>
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="content__information--banned--toggle">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content__information--banned">
                    <div className="row">
                      <div className="col-xl-8">
                        <div className="content__information--banned-heading">
                          <span>Email Verified</span>
                        </div>
                        <div className="content__information--banned-text">
                          <span>
                            Disabling this will automatically send the user a
                            verification email
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="content__information--banned--toggle">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content__tour--general">
                  <div className="content__tour--general-heading text-heading14">
                    <span>Rule and Configuration</span>
                  </div>
                  <div className="content__tour-general-group">
                    <div className="tour--general-group-item">
                      <div className="tour--info">
                        <input
                          type="text"
                          name="Fullname"
                          placeholder="Full name"
                          className="tour--info-input"
                        />
                        <label htmlFor="Fullname" className="tour--info-label">
                          Full name
                        </label>
                      </div>
                    </div>

                    <div className="tour--general-group-item">
                      <div className="tour--info">
                        <input
                          type="text"
                          name="Address"
                          placeholder="Address"
                          className="tour--info-input"
                        />
                        <label htmlFor="Address" className="tour--info-label">
                          Address
                        </label>
                      </div>
                    </div>

                    <div className="tour--general-group-item">
                      <div className="tour--info">
                        <input
                          type="text"
                          name="EmailAddress"
                          placeholder="Email Address"
                          className="tour--info-input"
                        />
                        <label
                          htmlFor="EmailAddress"
                          className="tour--info-label label-width"
                        >
                          Email Address
                        </label>
                      </div>
                    </div>

                    <div className="tour--general-group-item">
                      <div className="tour--info">
                        <input
                          type="text"
                          name="PhoneNumber"
                          placeholder="Phone Number"
                          className="tour--info-input"
                        />
                        <label
                          htmlFor="PhoneNumber"
                          className="tour--info-label label-width"
                        >
                          Phone Number
                        </label>
                      </div>
                    </div>

                    <div className="row tour--general-group-item">
                      <div className="tour--info tour--info-check col-xl-1">
                        <input
                          type="checkbox"
                          name="Criteria"
                          placeholder="Criteria"
                          className="tour--info-inputCheck"
                        />
                      </div>
                      <div className="tour--info-labelCheck col-xl-11 ">
                        <span>Ready for new tournament</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tour--general-btn">
                  <div className="content__body--button">
                    <button className="btn btn-saveupload">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export default UserDetail;
