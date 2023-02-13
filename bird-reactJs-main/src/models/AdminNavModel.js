import { makeAutoObservable } from "mobx";
import { AdminNav } from "../core/utils/Types";
class AdminNavModel {
    active
    // huong dan su dung : sau nay co them nav thi them o day va them ben routes la xong khong duoc sua cau truc gi ca nhe. no se tu gen ra nav
    links = [
        new AdminNav(1,"General","",[],
          [
              new AdminNav(2,"Danh sách giải đấu","/Admin",[],[]),
              new AdminNav(3,"Danh sách trận đấu","/Admin/Match",[],[]),
              new AdminNav(4,"Danh sách Bird","/Admin/Birds",[],[]),
              new AdminNav(5,"Danh sách User","/Admin/Users",[],[])
          ]
        ),
        new AdminNav(6,"CONFIGURATION","",[],[
            new AdminNav(7,"Điều luật","/Admin/Ruler",[],[]),
            new AdminNav(8,"Cài đặt hệ thống","/Admin/Settings",[],[])
        ])
    ]
    constructor(){
        makeAutoObservable(this)
        this.setActive(this.links[0].children[0].id)
    }

    setActive = (val)=>{this.active = val}
}
const adminNavModel = new AdminNavModel()
export default adminNavModel