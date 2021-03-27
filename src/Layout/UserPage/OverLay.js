import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import UserSidebar from '../../components/User/UserSidebar'


export default function AdminPage({children}) {
    return (
        <Box display={{base:"none",lg:"flex"}}>
            
            <UserSidebar width="25%">
                
            </UserSidebar>
            
            <Box width={{base:"95%",lg:"75%"}}>
                {children} 
            </Box>
        </Box>
    )
}
