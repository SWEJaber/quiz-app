import React from 'react'
import { InputFieldStyle, ValidationRule } from '../Types/types'
import InputValidationField from './InputValidationField'

type Props = 
{
    style?: InputFieldStyle
    onChange: (e: {value: string, isValid: boolean}) => void
}


const QuizTitleInput = (props: Props) => 
{
    const validationRules: ValidationRule[] =
    [
        {
            checkValidity: (value: string) => value.length > 2,
            errorMessage: "The quiz title must be longer than 2 characters"
        },
        {
            checkValidity: (value: string) => value.length < 151,
            errorMessage: "The quiz title must not be longer than 150 characters."
        }
    ]

  return (
   <InputValidationField 
        style={props?.style}
        label='Quiz Title'

        validationRules={validationRules}
        isOptional={false}

        onChange={props.onChange}
   />
  )
}

export default QuizTitleInput