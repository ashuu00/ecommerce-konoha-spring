import React,{useState,useEffect} from 'react'
import {Box, Button, FormControl, FormLabel, Input, FormHelperText, RadioGroup, HStack,
        Radio, VStack, Text, Accordion, Icon,  AccordionButton, 
        AccordionPanel,  AccordionItem, List, ListItem,AccordionIcon,
        useDisclosure,
        Badge,
        Center} from '@chakra-ui/react'
import {getCollections, getCollection, postCollection, updateCollection, deleteCollection, getSubCategories} from '../../../functions/Category'
import {CreateButton, UpdateButton, CancelButton} from '../../Blocks/Buttons'
import CancelAlert from '../../Blocks/AlertDialog'
import {SuccessToast, ErrorToast} from '../../Blocks/Toasts'
import {FaEdit, FaTrash, FaPlus} from 'react-icons/fa'
import {Divider} from '@material-ui/core'
import MyModal from '../../Blocks/Modal'


export default function CollectionForm() {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [CollectionName,setCollectionName]=useState('')
    const [alertOpen, setAlertOpen] = useState(false)
    const [categories,setCategories]=useState([])
    const [parentSlug,setParentSlug]=useState('')

    // useEffect( () => {
    //     async function getVal () {
    //         const getAll=await getCategories();
    //         console.log(getAll);
    //         setCategories(getAll.data);
    //         }
    //      getVal()
    // }, [])    
   

    const onClosed = () => setAlertOpen(false)

    const handleAdd=()=>{
        
    }

    const createSub=async (parentItem)=>{
        try {
            const Collection=await postCollection({"name":CollectionName,"parent":parentItem});
            SuccessToast(Collection.data.name)
            

        } catch (error) {
            console.log(error.response);
            ErrorToast (error.response.data);
        }
    }

   
    const handleAlert=(name)=>{
        setCollectionName(name);
        setAlertOpen(true)
    }
    const handleDelete=async (slug)=>{
        
        try {
            await deleteCollection(slug);
            setCollectionName('');
            SuccessToast("Deleted Successfully!!");
        } catch (error) {
            ErrorToast(error.response.data);
        }
    }

    
    const handleCreate =async () => {
        try {
            const Collection=await postCollection(CollectionName);
            setCollectionName('');
            SuccessToast(Collection.data.name);
        } catch (error) {
            console.log(error.response);
            ErrorToast (error.response.data);
        }
    }
   
    return (
        <Box bg="gray.300">
            <MyModal isOpen={isOpen} event={()=>createSub(parentSlug)} onClose={onClose} isUpdate={false} name={CollectionName} setName={setCollectionName}/>
            <CancelAlert openState={alertOpen} event={()=>handleDelete(CollectionName)} onClosed={onClosed} header={CollectionName}/>
            {categories.map((val)=>(<Accordion allowToggle bg="green.50" mt={5}>
                <AccordionItem>
                    <AccordionButton>
                        <HStack flex="1" textAlign="left">
                            <Text mr={3} fontSize="xl" fontWeight="bold">
                                {val.name}
                            </Text>
                            <Badge colorScheme="orange" variant="subtle"  borderRadius="6%" 
                            fontSize="sm" fontWeight="bold" px={3} py={1}>13 List Items</Badge>
                        </HStack>
                        <Button colorScheme="cyan" size="md" mr={5} onClick={onOpen}><Icon as={FaEdit} color="white"/></Button>
                        <Button colorScheme="red" size="md" mr={5} onClick={()=>handleAlert(val.slug)}><Icon as={FaTrash}/></Button>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Center>

                        <CreateButton event={()=>{onOpen();setParentSlug(val.slug)}} text={<Text fontSize="md">Create Sub-Collection <Icon as={FaPlus} ml={1} mb={1}/></Text>}/>
                        </Center>
                        <List spacing={3}>
                            {val.subItems!==undefined&&val.subItems.map((subval)=>(
                                <Box>
                                 <ListItem>
                                 {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}
                                <Text fontSize="xl">{subval.name}</Text>
                                {console.log('this is inside',subval)}
                             </ListItem>
                             <Divider/>
                             </Box>
                            ))}
                            
                           
                        </List>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>))}
        </Box>
    )
}
