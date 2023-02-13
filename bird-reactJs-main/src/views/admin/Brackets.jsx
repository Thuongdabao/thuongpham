import AdminLayout, {
  HorizonNavbar,
  TableContent,
} from "../layout/admin/AdminLayout";

function Brackets() {
  return (
    <AdminLayout>
      <section>
        <div className="content">
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
            <div className="content__brackets--round">
              <div className="content__brackets--round-heading bracket-heading">
                <span>Timeline</span>
              </div>
              <div className="content__brackets--button">
                <div className="content__brackets--round-btn">
                  <div className="content__brackets--round-item">
                    <div className="row">
                      <div className="col-xl-9">
                        <div className="content__round--item-title">
                          <span>Round 50</span>
                        </div>

                        <div className="content__round--item-time">
                          <span>April 21 - 18:00</span>
                        </div>
                      </div>
                      <div className="col-xl-3 content__round--item-write">
                        <button className="btn-write">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content__brackets--round-btn">
                  <div className="content__brackets--round-item">
                    <div className="row">
                      <div className="col-xl-9">
                        <div className="content__round--item-title">
                          <span>Round 30</span>
                        </div>

                        <div className="content__round--item-time">
                          <span>April 24 - 18:00</span>
                        </div>
                      </div>
                      <div className="col-xl-3 content__round--item-write">
                        <button className="btn-write">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content__brackets--round-btn">
                  <div className="content__brackets--round-item">
                    <div className="row">
                      <div className="col-xl-9">
                        <div className="content__round--item-title">
                          <span>Round 10</span>
                        </div>

                        <div className="content__round--item-time">
                          <span>April 29 - 18:00</span>
                        </div>
                      </div>
                      <div className="col-xl-3 content__round--item-write">
                        <button className="btn-write">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content__brackets--round-btn">
                  <div className="content__brackets--round-item finals">
                    <div className="row">
                      <div className="col-xl-9">
                        <div className="content__round--item-title ">
                          <span>Finals</span>
                        </div>

                        <div className="content__round--item-time">
                          <span>April 30 - 14:00</span>
                        </div>
                      </div>
                      <div className="col-xl-3 content__round--item-write">
                        <button className="btn-write">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content__brackets--matches">
              <div className="content__brackets--matches-heading bracket-heading">
                <span>Matches</span>
              </div>
              <div className="content__brackets--matches-text bracket-text">
                <span>There are 56 user have sign up for this tournament</span>
              </div>

              <div className="content__body">
                <div className="content__body--group">
                  <TableContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export default Brackets;
