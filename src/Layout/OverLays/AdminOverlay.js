import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Admin/SideBar/Sidebar'

export default function AdminPage({children}) {
    return (
        <Stack direction="row">
            
            <Sidebar width="25%"/>
            
            <Box width="75%">
                {children} 
            </Box>
        </Stack>
    )
}