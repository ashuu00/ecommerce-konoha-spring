import React from 'react'
import { Button} from '@chakra-ui/react'
import CancelAlert from './AlertDialog'

export const CreateButton=({text, event, ...rest}) => {
    return (
        <Button colorScheme="blue" color="white" _hover={{bg:"blue.600"}} {...rest} onClick={event}>
            {text}
        </Button>
    )
}

export const CancelButton=({text, event, ...rest}) => {
    return (
        <Button colorScheme="red" color="white"  
        onClick={event} {...rest}>
            {text}
        </Button>
    )
}


export const UpdateButton=({text, event, ...rest}) => {
    return (
        <Button colorScheme="teal" color="white" onClick={event} {...rest} >
            {text}
        </Button>
    )
}
