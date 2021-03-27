import React,{useState,useRef} from 'react'

import {AlertDialog, AlertDialogBody, AlertDialogOverlay, AlertDialogContent,
        AlertDialogHeader, AlertDialogFooter, Button} from "@chakra-ui/react"


 const CancelDialog=({event, header, openState, onClosed}) => {

    
    const cancelRef = useRef()
    console.log("At alert dialgo",openState);
    return (
      <>
        <AlertDialog
          isOpen={openState}
          leastDestructiveRef={cancelRef}
          onClose={onClosed}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete {header}
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClosed}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={event} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
}

export default CancelDialog;