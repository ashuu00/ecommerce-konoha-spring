import React,{useEffect,useRef,useState} from 'react'
import EditorJs from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Image from '@editorjs/image'
import { Box, Heading, Button,Text, Input, Flex, VStack } from '@chakra-ui/react';
import {useDispatch,useSelector} from "react-redux"
import CreatableSelect from 'react-select/creatable'
import '../Admin.scss'
import axios from 'axios'

export default function ProductDescription({setIdx}) {
    const dispatch = useDispatch();
    //const {category}= useSelector(state=>state.product);
    const [keywords,setKeywords]=useState("");
    const [isLoading,setLoading]=useState(false);
    const [isShow,showCollection]=useState();
    const [dropDowns,setDropDowns]=useState([]);
    const [collectionForm,setCollectionForm]=useState({})
    const [value,setValue]=useState('')
    const editor=useRef(null);
    
    
    const  product = useSelector(state => state.product);
    let TempForm={};
    let dropDownArr=[];
    const collections=product?product.collection:[];
    useEffect(()=>{
        
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
    if(collections.length>0){
        collections.forEach(item => {
            Object.assign(TempForm,{[item.name]:''});
            const optionArr=[]
            item.items.forEach(text=>optionArr.push(createOption(text)))
            dropDownArr.push({ value:item.name, label:item.name, options:optionArr});
            
        });
        setCollectionForm(TempForm);
        setDropDowns([...dropDownArr]);
    }
    },[]);

    const createOption=(text)=>{
        return {label:text, value:String(text).toLowerCase().split(" ").join("-")}
    }

    console.log("product from dropdown is",dropDowns)
   console.log(collectionForm.genus);
    
    const handleClick=async (e)=>{

        e.preventDefault();
       const describeData=await editor.current.save();
       dispatch({
           type:'PRODUCT_DETAILS',
           payload:{
               description:describeData
           }
       });
       console.log(describeData);
       console.log('collection has',collectionForm);
       setIdx(2);

    }

    const handleSelectChange=(val,action)=>{
        console.log('action',action);
        const getName=action.name;
        // const updated={...collectionForm}
        //updated[action.name]
        setCollectionForm({...collectionForm,[action.name]:val.value})
        setValue(val);
       
    }

    const handleCreate= async (val,action)=>{
      // await axios.post('/api/collection/create-item')
      const formData=new FormData();
      formData.append('parent',`${action.name}`)
      formData.append('item',`${val.value}`)
      const resData=await axios.post('/api/collection/add-item',formData);
      console.log(resData);

    }
    return (
        <Box p={5} mt={5}>
            <Button mb={5} colorScheme="yellow" onClick={()=>{showCollection(true);console.log(collectionForm)}}>Add Collections</Button>
            {isShow&&(
            
            <VStack spacing={8} width="100%">
                {dropDowns.map((res)=>(
                    <Flex key={res.value} width="100%"  alignItems="center">
                    <Text>{res.label}</Text>
                    {console.log('res',res)}
                    <CreatableSelect key={res.value} 
                        className="react-select"
                        isClearable
                        name={res.value}
                        isDisabled={isLoading}
                        isLoading={isLoading}
                         onChange={handleSelectChange}
                         onCreateOption={handleCreate}
                        options={res.options}
                        value={value}
                    />
                </Flex>
                ))}
            </VStack>)}
            <Text fontSize="xl">Keywords</Text>
            <Input size="md" w="50%" bg="white"/>
            <Heading as="h2" size="xl">Product Description</Heading>
            <Box id="editorjs" zIndex={100} bg="white" mt={5} borderColor="blue.300" maxH="50vh" overflow="auto" borderWidth="3px" ></Box>
            <Button onClick={()=>setIdx(0)} colorScheme="blue"> Back</Button>
            <Button onClick={handleClick} colorScheme="teal"> Submit Data and Proceed</Button>
        </Box>
    )
}
