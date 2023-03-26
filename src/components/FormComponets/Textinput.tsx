import React from 'react'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { Controller, useFormContext } from 'react-hook-form'
import { theme } from '@/theme/theme';

interface IProps {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element,
  name: string;
}

export const TextInput = ({ leftIcon, rightIcon, name }: IProps) => {
  const { control } = useFormContext();
  return (
  <Controller 
    name={name}
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (
      <>
       <InputGroup>
        { leftIcon && <InputLeftElement>
          {leftIcon}
        </InputLeftElement> }
        <Input onChange={onChange} onBlur={onBlur} value={value} width='100%' height='58px' borderRadius={5} backgroundColor='whitesmoke' />
        { rightIcon && <InputRightElement>
          {rightIcon}
        </InputRightElement> }
       </InputGroup>
      </>
    )}
  />
  )
}
