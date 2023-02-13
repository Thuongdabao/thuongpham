import AdminLayout, { HeaderAdmin, NavAdmin, Search, TableContent } from "../layout/admin/AdminLayout";

function Match() {
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
            <div className="row content__body--search">
                <div className="col-xl-4">
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

export default Match;
