///  object constructor

export function UserModel(username,email,password,id){
    this.username = username;
    this.email = email;
    this.password = password;
    this.id = id;
}
export function ClientNav(id,title,to,params = {}){
   this.id = id;
   this.title = title;
   this.to = to;
   this.params = params;
}
export function AdminNav(id,title,to,params,children){
    this.id = id;
    this.title = title;
    this.to = to;
    this.params = params;
    this.children = children;
}



