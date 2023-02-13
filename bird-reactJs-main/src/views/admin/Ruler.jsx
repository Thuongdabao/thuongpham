import AdminLayout, {
  HeaderAdmin,
  NavAdmin,
  Search,
  TableContent,
} from "../layout/admin/AdminLayout";

function Ruler() {
  return (
    <AdminLayout>
      <section>
        <div className="content">
          <div className="content__header">
            <div className="row">
              <div className="col-xl-12 col-md-12 content__header--title">
                <span className="content__header--title-text">
                  Danh sách trận đấu
                </span>
              </div>
            </div>
          </div>

          <div className="content__body">
            <div className="content__body--group">
              <div className="row">
                <div className="col-xl-8">
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
                </div>
                <div className="col-xl-4 search__ruler">
                  <Search />
                </div>
              </div>
              <TableContent />
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export default Ruler;
