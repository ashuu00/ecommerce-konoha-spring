import { Input ,
    FormControl, FormLabel, 
    FormErrorMessage,FormErrorIcon, 
    Switch, 
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Select
    } from '@chakra-ui/react';
import {useField} from "formik";


export const CustomInput=({label,...props }) => {
    let [field,form]=useField(props);
   return (<FormControl isInvalid={form.error && form.touched} >
        <FormLabel htmlFor={props.name}>{label}</FormLabel>
        <Input {...field} {...props} id={props.name} placeholder={props.placeholder} width="50%" bg="gray.200"/>
        <FormErrorMessage><FormErrorIcon/>{form.error}</FormErrorMessage>
    </FormControl>)
}

export const CustomSwitch=({label,...props }) => {
    let [field]=useField(props);
   return (<FormControl display="flex" alignItems="center" >
        <FormLabel htmlFor={props.name}>{label}</FormLabel>
        <Switch {...field} {...props}  colorScheme="green" size="lg" />
    </FormControl>)
}

export const CustomSelect=({label, items,...props})=>{
    let [field]=useField(props);
   // console.table(categories);
    return (<Select placeholder={label} defaultChecked={true} {...field} {...props}>
    {items.map((values,idx)=>{
        return (<option value={values.value}  key={values.value}>
            {values.label}
        </option>)}
    )}
     </Select>)
}

export const CustomNumInput=({label, steps, max, mydefault, ...props }) => {
    let [field]=useField(props);
return (<FormControl display="flex" alignItems="center" >
            <FormLabel htmlFor={props.name}>{label}</FormLabel>
            <NumberInput step={steps}  min={0} defaultValue={mydefault} max={max?max:10000000}>
                <NumberInputField bg="teal.600" {...field} {...props} color="gray.100" />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>)
}