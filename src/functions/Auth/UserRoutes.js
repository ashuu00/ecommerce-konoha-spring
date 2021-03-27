import React,{useState} from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Spinner} from '@chakra-ui/react'
//children for all inside components and rest for all ther props
export default function UserRoutes({children, ...rest}) {
    
   
    const user=useSelector(state=>state.user);
       
    return (
        !(user&&user.token)?(<Route {...rest} render={()=>children}/>):
            (<Redirect to="/login"/>)
    )
}
