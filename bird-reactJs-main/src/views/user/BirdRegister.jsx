import { useState } from "react";
import UserLayout from "../layout/user/UserLayout";
import classNames from "classnames";

function BirdRegister() {
    const [NotificationNone, setNotificationNone] = useState(false);

    const onSuccess = (props) => {
      setNotificationNone(!NotificationNone);
    };
  
  return (
    <>
      <UserLayout>
        <section>
          <div className="content">
            <div className="content__header">
              <div className="row">
                <div className="col-xl-12 col-md-12 content__header--title">
                  <span className="content__header--title-text">
                    Danh sách chim
                  </span>
                </div>
              </div>
            </div>
            <div className="content__bodyAccount ">
              <div className="content__bodyAccount--item BirdRegister">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="BirdRegister__groupInput">
                      <div className="tour--general-group-item">
                        <div className="tour--info">
                          <input
                            type="text"
                            name="Name"
                            placeholder="Tên chim"
                            className="tour--info-input"
                          />
                          <label htmlFor="Name" className="tour--info-label">
                          Tên chim
                          </label>
                        </div>
                      </div>
                      <div className="tour--general-group-item">
                        <div className="tour--info">
                          <input
                            type="text"
                            name="type"
                            placeholder="Loại chim"
                            className="tour--info-input"
                          />
                          <label htmlFor="type" className="tour--info-label">
                          Loại chim
                          </label>
                        </div>
                      </div>
                      <div className="tour--general-group-item">
                        <div className="tour--info">
                          <input
                            type="text"
                            name="gioitinh"
                            placeholder="Giới tính"
                            className="tour--info-input"
                          />
                          <label htmlFor="gioitinh" className="tour--info-label">
                            Giới tính
                          </label>
                        </div>
                      </div>
                      <div className="tour--general-group-item">
                        <div className="tour--info">
                          <input
                            type="text"
                            name="Years"
                            placeholder="Năm sinh"
                            className="tour--info-input"
                          />
                          <label htmlFor="Years" className="tour--info-label">
                            Năm sinh
                          </label>
                        </div>
                      </div>
                      <div className="tour--general-group-item">
                        <div className="tour--info">
                          <textarea
                            type="text"
                            name="More"
                            placeholder="Miêu tả thêm"
                            className="tour--info-input textarea-input"
                          />
                          <label htmlFor="More" className="tour--info-label">
                            Miêu tả thêm
                          </label>
                        </div>
                      </div>
                      <div className="BirdList__item--info text-heading14">
                        <button className="btn--Account" onClick={()=>onSuccess()}>Đăng Kí</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 BirdRegister__BirdList">
                    <div className="BirdList__item--avatar"></div>
                    <div className="BirdList__item--info text-heading14">
                      <button className="btn--Account">Thêm Ảnh</button>
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
                  <span>Đăng kí thành công</span>
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
    </>
  );
}

export default BirdRegister;
