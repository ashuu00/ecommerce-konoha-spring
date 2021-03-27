import React from 'react'
import {Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    FormHelperText,
    Icon} from "@chakra-ui/react"

import {CreateButton,UpdateButton} from './Buttons'
import {FaWrench, FaPlus} from 'react-icons/fa'

export default function CustomModal({isUpdate ,event, name, setName, isOpen, onClose}) {
    

    const initialRef = React.useRef()
    
  
    return (
      <>      
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{isUpdate?"Change Category":"Create Category"}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl >
                    <FormLabel>Enter Category Name</FormLabel>
                    <Input size="md" placeholder="Enter Category Name" onChange={(e)=>setName(e.target.value)} value={name} />
                    <FormHelperText>Category Name must be unique.</FormHelperText>
            </FormControl>
  
              {/* <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl> */}
            </ModalBody>
  
            <ModalFooter>
            {isUpdate?
                (<UpdateButton event={event} text={<Text fontSize="md">Update <Icon as={FaWrench}/></Text>} />):
                (<CreateButton event={event} text={<Text fontSize="md">Create <Icon as={FaPlus} ml={1} mb={1}/></Text>}/>)}
              <Button onClick={onClose} ml={3} colorScheme="red"> Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
