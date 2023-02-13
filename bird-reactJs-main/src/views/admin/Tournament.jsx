import { Link } from "react-router-dom";
import AdminLayout, {
  HeaderAdmin,
  NavAdmin,
  Search,
  TableContent,
} from "../layout/admin/AdminLayout";

function Tournament() {
  return (
    <AdminLayout>
      <section>
        <div className="content">
          <div className="content__header">
            <div className="row">
              <div className="col-xl-9 col-md-7 content__header--title">
                <span className="content__header--title-text">
                  Danh sách giải đấu
                </span>
              </div>
              <div className="col-xl-3 col-md-5">
                <Link to="/Admin/CreateTour" className="content__create">
                  <button className="btn-create">Create a new one</button>
                </Link>
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

export default Tournament;
