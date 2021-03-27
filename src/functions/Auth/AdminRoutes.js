import React,{useState, useEffect} from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Spinner} from '@chakra-ui/react'
import axios from 'axios'
//children for all inside components and rest for all ther props
export default function AdminRoutes({children, ...rest}) {

    //this is the admin token request
    // const getAdmin=async (authtoken)=>{
    //     return await axios.post('/api/current-admin',{},{
    //       headers:{
    //         authtoken,
    //       }
    //     });
    //   }
    //checking admin, if true setOk to true
    const [ok,setOk]=useState(true);
    const user=useSelector(state=>state.user);

    // useEffect(() => {
    //     if(user&&user.token){
    //         getAdmin(user.token)
    //             .then(
    //                 res=>setOk(true))
    //             .catch(err=>{console.log(err);
    //                 setOk(false)});
    //     }
        
    // }, [user]);

    return (
        ok?(<Route {...rest} render={()=>children}/>):
            (<Redirect to="/login"/>)
    )
}