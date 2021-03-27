import React from 'react'
import {Box,Flex,Progress, Text, Icon,
        Modal, useDisclosure, Button,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalFooter,
        ModalBody,
        ModalCloseButton} from "@chakra-ui/react"
import OrderBox from '../../components/User/OrderBox'
import OrderDesc from '../../components/User/OrderDescription'
import ProgressBar from '../../components/StepProgress/OrderSteps'
import {BsCircleFill} from "react-icons/bs"

export default function UserOrders() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box p={10} >
            {/**Creating the order box here, but change it to componenets for cleaner look */}
            <OrderBox onClick={onOpen}/>
            <OrderBox onClick={onOpen}/>
            <Modal isOpen={isOpen} onClose={onClose} size="6xl">
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Order Id: 232323343422</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <OrderDesc/>  
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <ProgressBar/>
            
        </Box>
    )
}
