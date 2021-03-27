import React,{useEffect,useRef} from 'react'
import axios from 'axios'
import EditorJs from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Image from '@editorjs/image'
import { Accordion, AccordionButton,Flex, Text, Checkbox, AccordionPanel, Box, Button, Center, CheckboxGroup, Heading, VStack, AccordionItem, AccordionIcon, Input } from '@chakra-ui/react'
import './Admin.scss'


export default function BlogEditor() {

    const editor=useRef(null);
    useEffect(()=>{
        // axios.get('/userDetails').then(res=>{setuser(res.data);
        // console.log('Details are',user)});
        editor.current=new EditorJs({
            holder:'editorjs',

            tools: {
                
                header: {
                    class: Header,
                    inlineToolbar:true,
                    levels:[1,2,3,4,5,6]   
               }, 
               
               list: {
                   class: List,
                   inlineToolbar:true
                    },
                    //   checklist: {
                        //     class: Checklist,
                        //     inlineToolbar: true,
                        //   },
                        image:{
                            class:Image,
                            config: {
                                captionPlaceholder:"Add caption here",
                                endpoints: {
                                  byFile: 'http://localhost:5000/uploads/editorImage', // Your backend file uploader endpoint
                                //  byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                                }
                              }
                          }
                      }
                  }
                  )
        
    },[]);

    const handleClick=async (e)=>{

        e.preventDefault();
       const blogdata=await editor.current.save();
    }
   
    return (
        <Box mx={5}>
            <Box textAlign="center" mb={10} >
               <Heading as="h2" size="2xl" mt={5}> This is our Editor</Heading>
               <VStack alignItems="flex-start" mt={10} spacing={10}>
               <Flex width="100%">
                   <Text fontSize="xl" mr={5}>Enter Title of the Blog:</Text>
                   <Input type="text" variant="outlined" width="50%"/>
               </Flex>
               <Flex>
                <Text fontSize="xl" mr={5}>Select Categories:</Text>
                <Accordion allowToggle width="200px">
                    <AccordionItem>
                    <AccordionButton bg="blue.500" _hover={{bg:"cyan.700"}} color="white">Select Categories <AccordionIcon/></AccordionButton>
                    <AccordionPanel bg="white" mt={1}>
                        <CheckboxGroup colorScheme="green">
                            <VStack  alignItems="flex-start">
                                <Checkbox value="ashu">ashu</Checkbox>
                                <Checkbox value="ash">ash</Checkbox>
                                <Checkbox value="nishu">nishu</Checkbox>
                            </VStack>
                        </CheckboxGroup>
                    </AccordionPanel>
                    </AccordionItem>
                </Accordion>
               </Flex>
               
               </VStack>
            </Box>  
            <Box id="editorjs" zIndex={100} bg="white" mt={5} borderColor="blue.300" borderWidth="3px" ></Box>
            <Box>
            <Center>
            <Button colorScheme="purple" onClick={handleClick}>Add to Blog</Button>
            </Center>   
            </Box>
        </Box>
    )
}
