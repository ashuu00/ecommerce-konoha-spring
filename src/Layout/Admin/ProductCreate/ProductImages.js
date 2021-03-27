import React,{useState} from 'react'
import {Box,Text, Center, Icon, Image, HStack, Button} from '@chakra-ui/react'
import {AiFillPicture} from "react-icons/ai"
import Dropzone from 'react-dropzone'
export default function ProductImages({setIdx}) {

    const [images,setImage]=useState([]);
    const handleSubmit=()=>{
        setIdx(0);
    }

    return (
        <Box>
            <Text fontSize={['lg','xl','2xl','3xl']}>Photos of the Item</Text>
                    <Box >
                        <Dropzone onDrop={acceptedFiles => {
                                
                                console.log('Files image are',URL.createObjectURL(acceptedFiles[0]));
                                setImage(prev=>[...prev,URL.createObjectURL(acceptedFiles[0])]);
                                }}>
                            {({getRootProps, getInputProps}) => (
                                <section>
                                <Box {...getRootProps()} bg="cyan.300" h="300px" >
                                    <input {...getInputProps()} />
                                    <Center flexDir="column">
                                    <Icon as={AiFillPicture} w={40} h={40} color="gray.400"/>
                                    <Box w="80%">
                                    <Text>Drag 'n' drop some files here, or click to select files</Text>
                                    </Box>
                                    </Center>
                                </Box>
                                </section>
                            )}
                        </Dropzone>
                        {images&&(
                            <HStack spacing={4}>
                                {images.map(val=>
                                <Image size="md" src={val} alt="image text"/>)}
                            </HStack>)
                        }
                    </Box>
                    <Button colorScheme="blue" onClick={()=>setIdx(1)} >Go Back</Button>
                    <Button colorScheme="teal" onClick={handleSubmit}>Submit All Data</Button>
        </Box>
    )
}
