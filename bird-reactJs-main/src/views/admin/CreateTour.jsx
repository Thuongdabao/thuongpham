import AdminLayout from "../layout/admin/AdminLayout";

import image_1 from "../../assets/img/admin/imageRuler.png";
import image_2 from "../../assets/img/admin/nodesRuler.png";
import image_3 from "../../assets/img/admin/nodesRuler_2.png";
import drop from "../../assets/img/admin/drop.png";
import image_champion from "../../assets/img/admin/champion.png";

function CreateTour() {
  return (
    <AdminLayout>
      <section>
        <div className="content">
          <div className="content__header">
            <div className="content__header--title">
              <span className="content__header--title-text">Organize a Tournament</span>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 ">
              <div className="content__body--tour">
                <div className="content__search">
                  <input
                    type="text"
                    name="Search"
                    placeholder="Search"
                    className="content__search--input content__search--tour"
                  />
                  <label htmlFor="Search" className="content__search--label">
                    Name*
                  </label>
                  <div className="icon--search">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
                <div className="content__body--tour-organize">
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quis lobortis nisl cursus bibendum sit nulla accumsan
                        sodales ornare. At urna viverra non suspendisse neque,
                        lorem. Pretium condimentum pellentesque gravida id etiam
                        sit sed arcu euismod. Rhoncus proin orci duis
                        scelerisque molestie cursus tincidunt aliquam.
                      </span>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quis lobortis nisl cursus bibendum sit nulla accumsan
                        sodales ornare. At urna viverra non suspendisse neque,
                        lorem. Pretium condimentum pellentesque gravida id etiam
                        sit sed arcu euismod. Rhoncus proin orci duis
                        scelerisque molestie cursus tincidunt aliquam.
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
                          unordered list itemunordered list itemunordered list
                          itemunordered list itemunordered list itemunordered
                          list itemunordered list itemunordered list item
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quis lobortis nisl cursus bibendum sit nulla accumsan
                        sodales ornare. At urna viverra non suspendisse neque,
                        lorem. Pretium condimentum pellentesque gravida id etiam
                        sit sed arcu euismod. Rhoncus proin orci duis
                        scelerisque molestie cursus tincidunt aliquam.
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

                <div className="content__body--tour-edit">
                  <div className="tour__edit--img">
                    <div className="tour__edit--img-heading">Images</div>
                    <div className="tour__edit--img-body">
                      <div className="row">
                        <div className="col-xl-5">
                          <div className="tour__edit--drop-img">
                            <img src={drop} alt="drop" />
                          </div>
                        </div>

                        <div className="col-xl-7 tour__edit--drop">
                          <div className="tour__edit--drop-item">
                            <div className="tour__edit--drop-heading">
                              <span>Drop or Select file</span>
                            </div>
                            <div className="tour__edit--drop-text">
                              Drop files here of click &nbsp;
                              <a href="#" className="tour__edit--drop-textlink">
                                browse
                              </a>
                              &nbsp; throung your machine
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="content__body--tour-upload">
                      <div className="row">
                        <div className="col-xl-2">
                          <div className="tour__upload--item">
                            <img
                              src={image_champion}
                              alt="image_champion"
                              className="upload-img"
                            />
                            <div className="tour__upload--item-remove">
                              <button className="btn_upload-remove">
                                <i className="fa-solid fa-xmark"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="content__body--tour-button">
                      <div className="row">
                        <div className="col-xl-3 btn-img removeAll">
                          <button className="btn btn-removeAll">
                            Remove All
                          </button>
                        </div>
                        <div className="col-xl-3 btn-img">
                          <button className="btn btn-upload">
                            Upload Files
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content__body--button">
                <button className="btn btn-saveupload">Save</button>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="content__body--tour--general">
                <div className="content__tour--general">
                  <div className="content__tour--general-heading text-heading14">
                    <span>General Information</span>
                  </div>
                  <div className="content__tour-general-group">
                    <div className="tour--general-group-item">
                      <div className="tour--info">
                        <input
                          type="text"
                          name="Capability"
                          placeholder="Capability"
                          className="tour--info-input"
                        />
                        <label
                          htmlFor="Capability"
                          className="tour--info-label"
                        >
                          Capability
                        </label>
                      </div>
                    </div>

                    <div className="tour--general-group-item">
                      <div className="tour--info">
                        <input
                          type="text"
                          name="Location*"
                          placeholder="Location*"
                          className="tour--info-input"
                        />
                        <label htmlFor="Location*" className="tour--info-label">
                          Location*
                        </label>
                      </div>
                    </div>

                    <div className="tour--general-group-item">
                      <div className="tour--info">
                        <input
                          type="text"
                          name="MinimumAge"
                          placeholder="Minimum Age"
                          className="tour--info-input"
                        />
                        <label
                          htmlFor="MinimumAge"
                          className="tour--info-label label-width"
                        >
                          Minimum Age
                        </label>
                      </div>
                    </div>

                    <div className="tour--general-group-item">
                      <div className="tour--info">
                        <input
                          type="text"
                          name="MinimumWeight"
                          placeholder="Minimum Weight"
                          className="tour--info-input"
                        />
                        <label
                          htmlFor="MinimumWeight"
                          className="tour--info-label label-width"
                        >
                          Minimum Weight
                        </label>
                      </div>
                    </div>

                    <div className="tour--general-group-item">
                      <div className="tour--info">
                        <input
                          type="text"
                          name="Responsiblity"
                          placeholder="Responsiblity"
                          className="tour--info-input"
                        />
                        <label
                          htmlFor="Responsiblity"
                          className="tour--info-label label-width"
                        >
                          Responsiblity
                        </label>
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
                          name="Rule"
                          placeholder="Rule"
                          className="tour--info-input"
                        />
                        <label htmlFor="Rule" className="tour--info-label">
                          Rule
                        </label>
                      </div>
                    </div>

                    <div className="tour--general-group-item">
                      <div className="tour--info">
                        <input
                          type="text"
                          name="Criteria"
                          placeholder="Criteria"
                          className="tour--info-input"
                        />
                        <label htmlFor="Criteria" className="tour--info-label">
                          Criteria
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
                      <div className="tour--info-labelCheck col-xl-11">
                        <span>
                          Auto random pair of bird for matches (if have)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content__tour--general">
                  <div className="content__tour--general-heading text-heading14">
                    <span>Timeline</span>
                  </div>
                  <div className="content__tour-general-group">
                    <div className="tour--general-group-item">
                      <div className="tour--info-text">
                        <span>Round 1</span>
                      </div>
                      <div className="tour--ground">
                        <div className="row ">
                          <div className="col-xl-6">
                            <div className="tour--info">
                              <input
                                type="text"
                                name="Time"
                                placeholder="Time"
                                className="tour--info-input"
                              />
                              <label
                                htmlFor="Time"
                                className="tour--info-label  tour-timeline-text"
                              >
                                Time
                              </label>
                            </div>
                          </div>

                          <div className="col-xl-5">
                            <div className="tour--info">
                              <input
                                type="text"
                                name="Result Capacity"
                                placeholder="Result Capacity"
                                className="tour--info-input"
                              />
                              <label
                                htmlFor="Result Capacity"
                                className="tour--info-label tour-timeline-text"
                              >
                                Result Capacity
                              </label>
                            </div>
                          </div>

                          <div className="col-xl-1 round--remove">
                            <button className="btn-remove">
                              <i className="fa-regular fa-trash-can"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tour--general-group-item">
                      <div className="tour--info-text">
                        <span>Round 2</span>
                      </div>
                      <div className="tour--ground">
                        <div className="row ">
                          <div className="col-xl-6">
                            <div className="tour--info">
                              <input
                                type="text"
                                name="Time"
                                placeholder="Time"
                                className="tour--info-input"
                              />
                              <label
                                htmlFor="Time"
                                className="tour--info-label  tour-timeline-text label-width"
                              >
                                Time
                              </label>
                            </div>
                          </div>

                          <div className="col-xl-5">
                            <div className="tour--info">
                              <input
                                type="text"
                                name="Result Capacity"
                                placeholder="Result Capacity"
                                className="tour--info-input label-Capacity"
                              />
                              <label
                                htmlFor="Result Capacity"
                                className="tour--info-label tour-timeline-text label-width"
                              >
                                Result Capacity
                              </label>
                            </div>
                          </div>

                          <div className="col-xl-1 round--remove">
                            <button className="btn-remove">
                              <i className="fa-regular fa-trash-can"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tour--general-group-item tour--general-group-button">
                      <button className="btn-more">More round</button>
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

export default CreateTour;
