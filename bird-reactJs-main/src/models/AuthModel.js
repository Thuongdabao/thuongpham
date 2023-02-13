import { makeAutoObservable } from "mobx";

class AuthModel{

    isLogin = true;

    // bat buoc phai co
    constructor(){
        makeAutoObservable(this)
    }
    setIsLogin = (val)=>{this.isLogin = val}

    onLogin = async(loginInfo)=>{
        try{
            // fetch api
        }catch(e){

        }
    }

    onRegister = async (regInfo)=>{
        try{
            // fetch api
        }catch(e){

        }
    }
    /// fetching api luon de on len dau

    onAutoLogin = async()=>{
        try{
            // fetch api
        }catch(e){

        }
    }
    
}

const authModel = new AuthModel()
export default authModel;