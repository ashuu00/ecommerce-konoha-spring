import React,{useState,useEffect} from 'react';
import './App.scss'
import {auth} from './functions/Auth/OAuth'
import {useDispatch} from 'react-redux'
import {Switch,Route} from 'react-router-dom'

//Routes component Here 
import UserOverlay from './Layout/OverLays/UserOverlay'
import AdminOverlay from './Layout/OverLays/AdminOverlay'
import HomePage from './Layout/HomePage/HomePage'
import BlogHome from './Layout/BlogPage/Blogpage'
import axios from 'axios'
import UserRoutes from './functions/Auth/UserRoutes'
import AdminRoutes from './functions/Auth/AdminRoutes'
import CategoryPage from './Layout/Admin/AdminPage'
import ProductCreatePage from './Layout/Admin/ProductCreate/ProductCreatePage'
import SingleProductPage from './Layout/Products/SingleProduct'
import CategoryProducts from './Layout/Products/ProductsPage'
import CartPage from './Layout/Cart_Checkout/Cart'
import AdminOrders from './Layout/Admin/Orders'
import BlogEditor from './Layout/Admin/BlogEditor'
import UserOrders from './Layout/UserPage/UserOrders'
//Routes end

//demo's here

//demo end
function App() {
const [userType,setUserType]=React.useState('')
const getUser=async (authtoken)=>{
  return await axios.post('/api/user/',{},{
    headers:{
      authtoken,
    }
  });
}




const [role,changeRole]=useState(false);
  const dispatch=useDispatch();
//We check if any user has been  created or logged out
 useEffect(() => {
  const items=window.location.href.split('/');
  items.includes('admin')?setUserType('admin'):items.includes('seller')
                  ?setUserType('seller'):setUserType('user');
   const unsubscribe=auth.onAuthStateChanged(async (user)=>{
      if(user){
        const idTokenResult=await user.getIdTokenResult();
        try{
        const {data:userDetails}=await getUser(idTokenResult.token);
        console.log('details are',userDetails);
        window.localStorage.setItem("name",userDetails.name);
        changeRole(userDetails.role);
        dispatch({
          type:'LOGGED_IN_USER',
          payload:{
            name:userDetails.name,
            email:userDetails.email,
            token:idTokenResult.token   
          }
        });
        }catch(err){ console.error(err);}
      
     }
   });
   return ()=>unsubscribe();
 },  [dispatch])
  
 

  return (
  <div className="App">
    {userType==='admin'? /**Not for verification, just checks the routes */
      (<AdminOverlay>
        <Switch>
          <AdminRoutes path='/admin/category' exact component={CategoryPage}/>
          <AdminRoutes path='/admin/product' component={ProductCreatePage}/>
          <AdminRoutes path='/admin/orders'  component={AdminOrders}/>
          <AdminRoutes path='/admin/blog-editor'  component={BlogEditor}/>
        </Switch>
      </AdminOverlay>):
    (<UserOverlay>
      <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/blogs" component={BlogHome}/>
      <Route path="/product" component={SingleProductPage}/>
      <Route path="/products" component={CategoryProducts}/>
      <UserRoutes path="/user/history" component={UserOrders}/>
      <UserRoutes path="/cart" component={CartPage}/>
      </Switch>
    </UserOverlay>)
    }
  </div>
  );
}

export default App;
