import React from 'react';
import {createStandaloneToast} from '@chakra-ui/react'
const toast=createStandaloneToast()

export const SuccessToast = (name) => {
    return  toast({
                title: `Created Category ${name}`,
                description: "We've created Category Successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
              })
    
    
}

export const ErrorToast = (error) => {
        return  toast({
                title: `Failed to create`,
                description: `${error} `,
                status: "error",
                duration: 3000,
                isClosable: true,
              })
       
    
}


