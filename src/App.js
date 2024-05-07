//import logo from './logo.svg';
import react,{Fragment} from 'react';
import './App.css';
import {Home} from './Features/Home/Home.js';
import Menu,{loader as menuLoader} from './Features/Menu/Menu.js';
import Cart from './Features/Cart/Cart';
import Login from './Features/Login/Login.js';
import Sign from './Features/Login/Sign.js';
//import PageNav from './Features/Home/PageNav.js';
import {Applayout} from './Features/Applayout.js';
import { CustomerInfo } from './Features/Customer/CustomerInfo.js';
import OrderCheck from './Features/Customer/OrderCheck.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from './reducer/Storee.js';
import {Admin} from './Features/Login/Admin.js';


function App() {
 const router=  createBrowserRouter([{
  element:<Applayout/>,

  children:[
       {
        path:'/',
        element:<Home/>
       },
       {
        path:'/menu',
        element:<Menu/>,
        loader:menuLoader
       },
       {
        path:'/cart',
        element:<Cart/>
       },
       {
        path:'/customer',
        element:<CustomerInfo/>
       },
       {
        path:'/order',
        element:<OrderCheck/>
       },
       {
        path:'/login',
        element:<Login/>
       },
       
      ],
 },
 {
  path:'/sign',
  element:<Sign/>
 },
 {
  path:'/admin',
  element:<Admin/>
 }
     ]);

  return (
    <Fragment>
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    
    </Fragment>
    
  );
}

export default App;
