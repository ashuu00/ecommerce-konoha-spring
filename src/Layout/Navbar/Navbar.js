import React,{useState,useEffect} from 'react'
import './Navbar.scss'
import DesktopNav from './DesktopNav'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Register,{auth} from '../../functions/Auth/OAuth'
import {FaGoogle,FaUser} from 'react-icons/fa'
import {Button,Menu,MenuButton,MenuItem,MenuList,Grid,Heading
      ,Box,Flex, Input, InputGroup,GridItem,InputRightElement, Icon,useDisclosure}from '@chakra-ui/react'
import {Hidden} from '@material-ui/core'
import {useSelector,useDispatch} from 'react-redux'
import CustomDropDown from '../../components/Nav/DropDown'
import {Link} from 'react-router-dom';


export default function Navbar() {

  const dispatch=useDispatch();
  //Create the insides using material-ui
  const {user}=useSelector(state => ({...state}));
  
  const [login, setLogin] = useState(false)
  useEffect(() => {
    if(user&&user.token){
      setLogin(true)
    }
  }, [user]);//handling user may take time, so we need to put user here

  const handleLogin=()=>{
    if(!login){
    Register();
    }
    else{
      auth.signOut()
      .then(()=>{ setLogin(false); 
        dispatch({
          type:'LOGOUT_USER',
          payload:null
        });  
      });
    }
  }
  
  const list=[{
    route:'/user/history',
    label:'track hisory'
  }]

    return (
  <Grid templateColumns="repeat(10,1fr)"  bg="green.100" className="navbar" gap={2} borderBottom="2px solid green" > 
    <GridItem pl="2" colSpan={1}>
     <Link to="/"><Heading size="md">Chakra App</Heading></Link>
    </GridItem>
    <GridItem colSpan={6} mr={[2,3,5,6]}>
      <InputGroup >
        <Input placeholder="Search Here" bg="white" />
        <InputRightElement  children={
          <Button colorScheme="teal">
            <Icon as={SearchOutlinedIcon}/>
          </Button>} />
      </InputGroup>
    </GridItem>
    <GridItem colSpan={3}>
        <Flex justify="space-evenly" align="center">
         {login?<CustomDropDown  label={user.name.split(" ")[0]} onClick={handleLogin} items={list} />:(<Box as={Button} bg="teal.400" color="white" _hover={{bg:"teal.600"}} onClick={handleLogin} >
            <Icon as={login?FaUser:FaGoogle} color="green.300" size="md"/>  Sign-In Google
          </Box>)}
      <Menu >
          <MenuButton  className="navLink">
            <FavoriteBorderOutlinedIcon/> Saved
          </MenuButton>
          <MenuButton  className="navLink">
            <ShoppingCartOutlinedIcon/> Cart
          </MenuButton>
      </Menu>
        </Flex>
    </GridItem>
    <Hidden smDown>
      <GridItem colSpan={10} >
        <DesktopNav/>
      </GridItem>
    </Hidden>
  </Grid>
  ) 
  }
