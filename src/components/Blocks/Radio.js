import React,{useState} from 'react'
import {RadioGroup,FormLabel,HStack, Radio} from '@chakra-ui/react'

export default function MyRadio() {
    const [radioState,setRadioState]=useState('')
    return (
        <div>
            <RadioGroup defaultValue="No" onChange={setRadioState}>
                        <FormLabel>Contains List ? {radioState}</FormLabel>
                        <HStack spacing="24px">
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                        </HStack>
                    </RadioGroup>
        </div>
    )
}
