import AdminLayout, { HorizonNavbar } from "../layout/admin/AdminLayout";
import image_1 from "../../assets/img/admin/imageRuler.png";
import image_2 from "../../assets/img/admin/nodesRuler.png";
import image_3 from "../../assets/img/admin/nodesRuler_2.png";
import image_champion from "../../assets/img/admin/champion.png";

function Overview() {
  return (
    <AdminLayout>
      <section>
        <div className="content content-brackets">
          <div className="row content__brackets--heading">
            <div className="col-xl-4 col-md-4 content__header--title bracket--title">
              <span className="content__header--title-text ">
                FPT Bird Tournament
              </span>
            </div>
            <div className="col-xl-7">
              <HorizonNavbar />
            </div>
            <div className="col-xl-1 brackets-edit">
              <button className="btn btn-edit">Edit</button>
            </div>
          </div>

          <div className="content__brackets--body">
            <div className="row">
              <div className="col-xl-8">
                <section>
                  <div className="">
                    <div className="content__body">
                      <div className="content__body--group">
                        <div className="content__body--group-heading">
                          <div className="heading1 heading">
                            <span>Heading1</span>
                          </div>
                          <div className="heading2 heading">
                            <span>Heading2</span>
                          </div>
                          <div className="heading3 heading">
                            <span>Heading3</span>
                          </div>
                          <div className="heading1 heading">
                            <span>Heading1</span>
                          </div>
                        </div>

                        <div className="content-text">
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quis lobortis nisl cursus bibendum sit nulla
                            accumsan sodales ornare. At urna viverra non
                            suspendisse neque, lorem. Pretium condimentum
                            pellentesque gravida id etiam sit sed arcu euismod.
                            Rhoncus proin orci duis scelerisque molestie cursus
                            tincidunt aliquam.
                          </span>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quis lobortis nisl cursus bibendum sit nulla
                            accumsan sodales ornare. At urna viverra non
                            suspendisse neque, lorem. Pretium condimentum
                            pellentesque gravida id etiam sit sed arcu euismod.
                            Rhoncus proin orci duis scelerisque molestie cursus
                            tincidunt aliquam.
                          </span>
                        </div>
                        <div className="content__imgRuler">
                          <img
                            src={image_1}
                            alt=""
                            className="content__imgRuler--img"
                          />
                          <div className="content__imgRuler--text">
                            <a
                              href=""
                              className="content__imgRuler--text-link content-text"
                            >
                              Link text reuse anchor component
                            </a>
                          </div>
                        </div>

                        <div className="content__hr"></div>
                        <div className="content-text">
                          <ul>
                            <li>unordered list item</li>
                            <li>
                              unordered list itemunordered list itemunordered
                              list itemunordered list itemunordered list
                              itemunordered list itemunordered list
                              itemunordered list item
                            </li>
                            <li>unordered list item</li>
                          </ul>
                        </div>
                        <div className="content__body--group-heading">
                          <div className="heading1 heading">
                            <span>Heading1</span>
                          </div>
                          <div className="heading2 heading">
                            <span>Heading2</span>
                          </div>
                          <div className="heading3 heading">
                            <span>Heading3</span>
                          </div>
                        </div>

                        <div className="content-text">
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quis lobortis nisl cursus bibendum sit nulla
                            accumsan sodales ornare. At urna viverra non
                            suspendisse neque, lorem. Pretium condimentum
                            pellentesque gravida id etiam sit sed arcu euismod.
                            Rhoncus proin orci duis scelerisque molestie cursus
                            tincidunt aliquam.
                          </span>
                        </div>

                        <div className="content__imgRuler">
                          <img
                            src={image_2}
                            alt=""
                            className="content__imgRuler--img"
                          />
                        </div>

                        <div className="content-text">
                          <ol>
                            <li>ordered list item</li>
                            <li>ordered list item</li>
                            <li>ordered list item</li>
                          </ol>
                        </div>

                        <div className="content__imgRuler">
                          <img
                            src={image_3}
                            alt=""
                            className="content__imgRuler--img"
                          />
                        </div>

                        <div className="content-text content-text-nothing">
                          <span>
                            Nothing is impossible, the word itself says “I’m
                            possible!”
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="col-xl-4">
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

                        <div className="col-xl-7 champion__heading--introduce-text">
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
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline--heading">
                    <span>Timeline</span>
                  </div>

                  <div className="timeline__body">
                    <div className="timeline__body--item">
                    <ul>
                          <li>
                            <span className="thoi_gian">
                              <h4>January 21</h4>
                            </span>
                          </li>
                          <li>
                            <span className="thoi_gian">
                              <h4>Febuary 22</h4>
                            </span>
                          </li>
                          <li>
                            <span className="thoi_gian">
                              <h4>March 23</h4>
                            </span>
                          </li>
                          <li>
                            <span className="thoi_gian">
                              <h4>April 4</h4>
                            </span>
                          </li>
                          <li>
                            <span className="thoi_gian">
                              <h4>May 25</h4>
                            </span>
                          </li>
                          <li>
                            <span className="thoi_gian">
                              <h4>July 26</h4>
                            </span>
                          </li>
                          <li>
                            <span className="thoi_gian">
                              <h4>September</h4>
                            </span>
                          </li>
                        </ul>
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

export default Overview;
