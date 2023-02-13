import AdminLayout from "../layout/admin/AdminLayout";
import avatarBird from "../../assets/img/admin/avatarbird.png";
import avatar2Bird from "../../assets/img/admin/avatar2bird.png";
import image_champion from "../../assets/img/admin/champion.png";

function BirdDetail() {
  return (
    <AdminLayout>
      <section>
        <div className="content">
          <div className="content__header">
            <div className="row">
              <div className="col-xl-12 col-md-12 content__header--title">
                <span className="content__header--title-text">
                  Bird Information
                </span>
              </div>
            </div>
          </div>

          <div className="">
            <div className="content__body--group">
              <div className="row">
                <div className="col-xl-4">
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
                            Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1
                            MB
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

                        <div className="col-xl-12 content__information--owner">
                          <div className="row">
                            <div className="col-xl-2">
                              <div className="content__information--owner-img">
                                <img
                                  src={avatar2Bird}
                                  alt="avatar2Bird"
                                  className="owner-img"
                                />
                              </div>
                            </div>
                            <div className="col-xl-10 content__information--owner-item">
                              <div className="content__information--owner-heading">
                                <span>Owner</span>
                              </div>
                              <div className="content__information--owner-text">
                                Nguyễn Văn A
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-12 content__information-group">
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="content__information--item">
                                <div className="content__information--item-heading">
                                  <span>Name</span>
                                </div>

                                <div className="content__information--item-text">
                                  Chào mào Nerd
                                </div>
                              </div>
                              <div className="content__information--item">
                                <div className="content__information--item-heading">
                                  <span>Type</span>
                                </div>

                                <div className="content__information--item-text">
                                  Chào mào Bông
                                </div>
                              </div>
                              <div className="content__information--item">
                                <div className="content__information--item-heading">
                                  <span>Gender</span>
                                </div>

                                <div className="content__information--item-text">
                                  Male
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="content__information--item">
                                <div className="content__information--item-heading">
                                  <span>Age</span>
                                </div>

                                <div className="content__information--item-text">
                                  14 months
                                </div>
                              </div>
                              <div className="content__information--item">
                                <div className="content__information--item-heading">
                                  <span>Weight</span>
                                </div>

                                <div className="content__information--item-text">
                                  0.3 kg
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-8">
                    <div className="content__statistical">
                        <div className="content__statistical-item">

                        </div>

                        <div className="content__statistical-item">
                            
                        </div>
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

export default BirdDetail;
