import React,{useEffect,useState} from 'react'
import {Form,Formik} from 'formik'
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';
import * as yup from 'yup'
import {Button, 
        Box,
        Text,
        VStack,
        Heading} from '@chakra-ui/react';
import {CustomInput, CustomNumInput, CustomSelect, CustomSwitch} from '../Blocks/ProductForm'
import {useDispatch} from "react-redux"
import './Admin.scss'
import {getCategories} from '../../functions/Category'
import axios from 'axios'


export default function ProductForm({setIdx}) { 

    const [categories,setCategories]=useState([{value:"plant",label:"Plant"}, {value:"pot",label:"Pot"}, {value:"seed",label:"Seed"},{value:"garden-decor",label:"Garden Decor"}]);
   const dispatch = useDispatch();
    const [collection,setCollection]=useState([]);
   

    // function validateName(value) {
    //     let error
    //     if (!value) {
    //       error = "Name is required"
    //     } else if (value.toLowerCase() !== "naruto") {
    //       error = "Jeez! You're not a fan 😱"
    //     }
    //     return error
    //   }
    //   function validatePlace(value) {
    //     let error
    //     if (!value) {
    //       error = "Name is required"
    //     } else if (value.toLowerCase() !== "naruto") {
    //       error = "Jeez! You're not a fan 😱"
    //     }
    //     return error
    //   }
    const colorOptions=[{value:"red",label:"red"},{value:"blue",label:"blue"},{value:"green",label:"green"},{value:"pink",label:"pink"},{value:"yellow",label:"yellow"}]
    const onChange=collections=>{
        const curr=collections||[];
        setCollection(curr);
    }
    
    const animatedComponents=makeAnimated();

    

    return (
        <Formik 
        initialValues={{name:'',shipping:false, category:"", subcategory:"",
        price:500,quantity:200,discount:30}}
        onSubmit={async (values,actions)=>{
            actions.setSubmitting(true);
            const handleCollection= await axios.get(`/api/collection/get-filter/${values.category.toLowerCase().split(" ").join("-")}`)
        
           dispatch({
               type:"PRODUCT_DETAILS",
               payload:{
                   collection:handleCollection.data.items,
                   ...values
               }
           });
           
           setIdx(1);
           
            actions.setSubmitting(false);
        }}>
            <Box w="100%" display={{md:'flex'}} pt={10} bg="gray.50" justifyContent="space-between">
                <Box width={{base:'95%',md:'60%'}} px={5}  className="product-form">
                    <Form>
                        <VStack spacing={5}>
                            <CustomInput name="name" placeholder="Enter Name" label="Enter Your Name"  />
                            <CustomSwitch name="shipping" label="Available for shipping? " />
                            <CustomNumInput name="price" label="Price of the Product (Rs) : " mydefault={500} steps={10}/>
                            <CustomNumInput name="quantity" label="Quantity of Product : "    mydefault={10} steps={1} />
                            <CustomNumInput name="discount" label="Discount on Product : "    mydefault={0} steps={5}  max={100}/>
                            <CustomSelect name="category" label="Select Category" items={categories}/>
                            <CustomSelect name="subcategory" label="Select SubCategory" items={categories}/>
                            <Button colorScheme="blue" mt={4} type="submit">Submit And Proceed</Button>
                        </VStack>
                    </Form>
                </Box>
                {/* <Box width={{base:"95%",md:'30%'}} p={5} m={5} bg="gray.300" className="right-holder">
                    
                    <Box bg="red.100" p={[3,4,4,5]} mt={[2,2,5,5]} >
                        
                        <Heading as="h3" size="xl" mb={{base:3,lg:5}}>Collections</Heading>
                        <ReactSelect   closeMenuOnSelect={false}
                        components={animatedComponents}
                        value={collection}
                        onChange={onChange}
                        defaultValue={[colorOptions[4], colorOptions[2]]}
                        isMulti
                        options={colorOptions}/>
                        {collection.length>0&&(<Box bg="cyan.300">
                            {
                                collection.map((val)=>(<Text key={val.value} fontSize="xl">{val.value}</Text>))
                            }
                        </Box>)}
                    </Box>
                </Box> */}
            </Box>
        </Formik>
    )
}
