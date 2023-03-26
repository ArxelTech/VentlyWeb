import React from 'react'
import { FormProvider, useFormContext, useForm as useHookForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
interface IProps {
    defaultValues: any;
    validationSchema?: z.ZodObject<any>;
    onSubmit: (data:any) => void;
}

const useFrom = ({ defaultValues, validationSchema, onSubmit }: IProps) => {
    const methods = useHookForm({
        defaultValues,
        resolver: validationSchema ? zodResolver(validationSchema as z.ZodObject<any>) : undefined,
    });

    const renderForm = React.useCallback((children: JSX.Element) => {
        return (
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {children}
                </form>
            </FormProvider>
        )
    }, [methods, onSubmit]);
   
  return {
    renderForm,
    formState: methods.formState,
    control: methods.control,
    watch: methods.watch,
    values: methods.getValues,
    reset: methods.reset,
    unregister:methods.unregister,
  }
}

export default useFrom
