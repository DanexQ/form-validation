import React from "react";
import styled from "styled-components";

interface FormInputsProps {
  placeholder: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputs = ({
  placeholder,
  name,
  value,
  handleChange,
}: FormInputsProps) => {
  return (
    <div className="formInput">
      <Input
        placeholder={placeholder}
        type="text"
        onChange={handleChange}
        name={name}
        value={value}
        required
      />
    </div>
  );
};

const MemoizedFormInputs = React.memo(FormInputs);

export default MemoizedFormInputs;

const FormInput = styled.div``;

const Input = styled.input`
  padding: 15px;
  margin: 10px 0px;
`;
