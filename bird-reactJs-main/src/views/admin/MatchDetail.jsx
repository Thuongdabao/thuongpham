import AdminLayout, { Search } from "../layout/admin/AdminLayout";
import image_champion from "../../assets/img/admin/champion.png";
import avatar2Bird from "../../assets/img/admin/avatar2bird.png";

function MatchDetail() {
  return (
    <div className="MatchDetail">
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

            <div className="content__body--group">
              <div className="row">
                <div className="col-xl-5">
                  <div className="champion">
                    <div className="champion__heading">
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="champion__heading--title">
                            <span>Champion</span>
                          </div>
                          <div className="champion__heading--text">
                            Highest overall score
                          </div>
                        </div>
                        <div className="col-xl-5">
                          <div className="champion__heading--score">
                            <span>HIGHEST SCORE</span>
                          </div>
                        </div>
                      </div>
                    </div>
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

                    <div className="champion__bottom">
                      <div className="row">
                        <div className="col-xl-4 champion--from champion__bottom--item">
                          <span className="champion--from-heading champion__bottom--item-heading">
                            Form
                          </span>
                          <div className="champion--from-text champion__bottom--item-text">
                            99 point
                          </div>
                        </div>
                        <div className="col-xl-4 champion--voice champion__bottom--item">
                          <span className="champion--voice-heading champion__bottom--item-heading">
                            Voice
                          </span>
                          <div className="champion--voice-text champion__bottom--item-text">
                            98 point
                          </div>
                        </div>
                        <div className="col-xl-4 champion--posture champion__bottom--item">
                          <span className="champion--posture-heading champion__bottom--item-heading">
                            Posture
                          </span>
                          <div className="champion--posture-text champion__bottom--item-text">
                            10 point
                          </div>
                        </div>
                      </div>

                      <div className="champion__bottom--point">
                        <div className="champion__bottom--point-average champion__bottom--point-text">
                          <span className="champion__bottom--point-children">
                            Trung bình điểm số cao hơn 10% so với đối top 2 của
                            trận
                          </span>
                        </div>

                        <div className="champion__bottom--point-item champion__bottom--point-text">
                          <span className="champion__bottom--point-children">
                            Đạt điểm tuyệt đối về thái độ
                          </span>
                        </div>

                        <div className="champion__bottom--point-item champion__bottom--point-text">
                          <span className="champion__bottom--point-children">
                            Đạt điểm tuyệt đối về tư thái, dáng đấu
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-7">
                  <div className="content__statistical">
                    <div className="content__statistical-item"></div>
                  </div>
                </div>
              </div>

              <div className="content__body--group-item">
                <div className="row">
                  <div className="col-xl-3">
                    <Search />
                  </div>

                  <div className="col-xl-3">
                    <div className="content__search">
                      <input
                        type="text"
                        name="Status"
                        placeholder="Status"
                        className="content__search--input"
                      />
                      <label
                        htmlFor="Status"
                        className="content__search--label"
                      >
                        Status
                      </label>
                      <div className="icon--search">
                        <i className="fa-solid fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 content__userDetail-groupBtn">
                    <div className="content__userDetail--groupBtn-item">
                      <button>
                        <i className="fa-solid fa-list"></i>
                      </button>
                      <button className="active">
                        <i className="fa-sharp fa-solid fa-calendar-days"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row matchDetail">
                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--failed">
                                failed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--passed">
                                passed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="champion matchDetail-item">
                      <div className="champion__body">
                        <div className="champion__heading--introduce">
                          <div className="row">
                            <div className="col-xl-10">
                              <div className="row">
                                <div className="col-xl-3 champion__heading--introduce-img">
                                  <div className="content__information--owner-img">
                                    <img
                                      src={avatar2Bird}
                                      alt="avatar2Bird"
                                      className="owner-img"
                                    />
                                  </div>
                                </div>

                                <div className="col-xl-9 champion__heading--introduce-text">
                                  <div className="content__information--owner-item">
                                    <div className="content__information--owner-heading matchDetail--heading">
                                      <span>Chào mào Đại Nam</span>
                                    </div>
                                    <div className="content__information--owner-text matchDetail--text">
                                      Nguyễn Văn A
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="champion__bottom matchDetail--bottom">
                                <div className="row">
                                  <div className="col-xl-4 champion--from champion__bottom--item">
                                    <span className="champion--from-heading champion__bottom--item-heading matchDetail--text">
                                      Form
                                    </span>
                                    <div className="champion--from-text champion__bottom--item-tex matchDetail--textt matchDetail--text">
                                      99 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--voice champion__bottom--item">
                                    <span className="champion--voice-heading champion__bottom--item-heading matchDetail--text">
                                      Voice
                                    </span>
                                    <div className="champion--voice-text champion__bottom--item-text matchDetail--text">
                                      98 point
                                    </div>
                                  </div>
                                  <div className="col-xl-4 champion--posture champion__bottom--item">
                                    <span className="champion--posture-heading champion__bottom--item-heading matchDetail--text">
                                      Posture
                                    </span>
                                    <div className="champion--posture-text champion__bottom--item-text matchDetail--text">
                                      10 point
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-2 matchDetail--status">
                              <span className="matchDetail--match">
                                In Match
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AdminLayout>

      <div className="Notification">
        <div className="Notification-item">
          <div className="row Notification-item-group">
            <div className="col-xl-12 Notification-item-group-col">
              <div className="content__tour--general">
                <div className="content__tour--general-heading text-heading14">
                  <span>Rule and Configuration</span>
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
                      <div className="col-xl-6">
                        <button className="detail-btnKick detail-text">Kick</button>
                      </div>

                      <div className="col-xl-3">
                        <button className="detail-btnCancel detail-text">Cancel</button>
                      </div>

                      <div className="col-xl-3">
                        <button className="detail-btnSave detail-text">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchDetail;
