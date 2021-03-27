import React,{useState} from 'react'
import ProductCreateForm from '../../../components/Admin/ProductForm'
import ProductDescribe from './ProductDescription'
import ProductImages from './ProductImages'
import {Texts, TextList, Box, Boxs, Text, Center} from "@chakra-ui/react"
import '../Admin.scss';

export default function ProductCreatePage() {

    const [TabIdx, setTabIdx] = useState(0)
    const handleTabChange = (index) => {
        console.log("indside tab",index);
        setTabIdx(index);
      }

      console.log(TabIdx);
    return (
        <div>
            <Box>
                <Center mb="1em" >
                    <Text mr={3} className={TabIdx===0?'activeLabel':''}>Form</Text>
                    <Text mr={3}>Description</Text>
                    <Text mr={3}>Image Download</Text>
                </Center>
                <Box>
                    <Box display={TabIdx!==0?'none':''}>
                         <ProductCreateForm setIdx={handleTabChange}/>
                    </Box>
                    <Box display={TabIdx!==1?'none':''}>
                        <ProductDescribe setIdx={handleTabChange}/>
                    </Box>
                    <Box display={TabIdx!==2?'none':''}>
                        <ProductImages setIdx={handleTabChange}/>
                    </Box>
                </Box>
            </Box>
            
        </div>
    )
}
