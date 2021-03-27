import { Box, Image, Flex, Badge, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import './Card.scss';
import { useHistory} from 'react-router-dom';
export default function Example() {
  const variant = useBreakpointValue({ base: "sm", md: "md",lg:"lg"})
  const dispatch = useDispatch()
  const history=useHistory();
  const addToCart=()=>{
      dispatch({
        type:'ADD_CART'
      });
  }
  return (
    
    <Box p={{base:"1",md:"3",lg:"5"}} mx={4} my={5} maxW="320px" borderWidth="1px" className="productCard" borderRadius="md" onClick={()=>history.push('/product')}>
      <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
      <Flex pt={["1","2","3"]} pl={["1","2","3"]} alignItems="baseline">
        <Badge colorScheme="pink" >30% Off</Badge>
        <Text
          ml={1}
          textTransform="uppercase"
          fontSize={{base:"xs",md:"sm"}}
          fontWeight="bold"
          color="pink.800"
          >
          2 Days Left
        </Text>
      </Flex>
      <Text mt={2} fontSize={["sm","lg","xl"]} fontWeight="semibold" lineHeight="short">
        Modern, High Variety Plants for your gardening needs!
      </Text>
      <Flex mt={1} align={{base:"center",lg:"baseline"}} justify="center" direction={{base:"column",lg:"row"}}>
      <Text mt={{base:"1",md:"2",lg:"2.5"}} fontSize={["sm","lg","xl","2xl"]} color="green.400" fontWeight="bold">Rs 119.00</Text>
        <Text ml={1} fontSize={{base:"xs",md:"sm"}} as="s" color="red.500">
            Rs 300.00
        </Text>
      </Flex>
      <Flex mt={1} align="baseline" justify="center">
        <Button colorScheme="teal" mx="auto" onClick={addToCart} className="addCart" fontSize={["sm","md","lg"]} size={variant} zIndex="200">
          Add to Cart 
        </Button>
      </Flex>
    </Box>
    
  );
}
