import React from 'react'
import {Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

export default function CustomBreadCrumb({routes, ...props}) {
    const history=useHistory();
    
    return (
        <Breadcrumb {...props} separator={<FaChevronRight/>}>
            <BreadcrumbItem>
                <BreadcrumbLink onClick={()=>history.push("/")}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            {routes.map((val,idx)=>{
                console.log(routes)
                const pathname=`/${routes.slice(0,idx+1).join("/")}`;
                const isActive=idx===routes.length-1;
                return  (<BreadcrumbItem isCurrentPage={isActive}>
                                <BreadcrumbLink onClick={isActive?'':()=>history.push(pathname)}>{val[0].toUpperCase()+val.substring(1)}</BreadcrumbLink>
                        </BreadcrumbItem>)}
            )}

    </Breadcrumb>
    )
}
