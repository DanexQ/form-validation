import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { InputProp } from "../App";

interface FormInputsProps extends InputProp {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputs = (props: FormInputsProps) => {
  const [focused, setFocused] = useState(false);
  const { id, errorMessage, label, ...inputProps } = props;

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    setFocused(true);
    console.log("FOCUSED");
  };

  return (
    <FormContainer>
      <label>{label}</label>
      <Input {...inputProps} onBlur={handleFocus} focused={focused} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </FormContainer>
  );
};

const MemoizedFormInputs = React.memo(FormInputs);

export default MemoizedFormInputs;

const FormContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 1.2rem;

  label {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const Input = styled.input<{ focused: boolean }>`
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: inherit;
  background-color: rgba(0, 0, 0, 0.03);
  width: 100%;
  transition: all 0.2s;

  &:invalid ~ span {
    ${({ focused }) => focused && "display:block;"};
  }

  &::placeholder {
    font-size: inherit;
    color: rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const ErrorMessage = styled.span`
  padding: 3px;
  color: red;
  font-size: 12px;
  display: none;
`;
