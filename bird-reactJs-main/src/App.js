import './core/components/css/global.css';
import "@fontsource/poppins";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./core/components/css/global.css"
import './core/components/css/LayoutResponsive.css';
import { useLayoutEffect } from 'react';
import { observer } from 'mobx-react';
import { USER_LOGIN_KEY } from './core/utils/Contains';
import AppRouter from './core/navs/AppRoute'

function App() {
  // cookies 
    // check login 
    // neu co cookies o ls => auto login
    useLayoutEffect(()=>{
      // check login
      const syncLogin = ()=>{
          let userId = window.localStorage.getItem(USER_LOGIN_KEY);
          if(userId === null){
            return;
          }
          // // process auto login
      }
      syncLogin()
    },[])
  ///
  return (
    <>
      <AppRouter />
    </>
    
  );
}
export default observer(App);
