import styled from "styled-components";
import "./App.css";
import FormInputs from "./components/FormInputs";
import React, { useCallback, useState } from "react";
import { ImportsNotUsedAsValues } from "typescript";

type FormDataProps = {
  username: string;
  email: string;
  password: string;
  comfirmPassword: string;
};

const initialState = {
  username: "",
  email: "",
  password: "",
  comfirmPassword: "",
};

export interface InputProp {
  id: number;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  errorMessage: string;
  pattern?: string;
}

const App = () => {
  const [formData, setFormData] = useState<FormDataProps>(initialState);
  const isDisabled =
    Object.values(formData).every((val) => val !== "") &&
    formData.password === formData.comfirmPassword;

  const inputs: InputProp[] = [
    {
      id: 1,
      name: "username",
      type: "text",
      label: "Username",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    },
    {
      id: 4,
      name: "comfirmPassword",
      type: "password",
      label: "Comfirm Password",
      placeholder: "Comfirm Password",
      errorMessage: "Passwords don't match!",
      pattern: formData.password,
    },
  ];

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    },
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <AppContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormLabel>REGISTER</FormLabel>
        {inputs.map((input) => {
          console.log({ ...input });
          return (
            <FormInputs
              key={input.id}
              {...input}
              onChange={handleChange}
              value={formData[input.name as keyof FormDataProps]}
            />
          );
        })}
        <SubmitButton disabled={!isDisabled}>Submit</SubmitButton>
      </StyledForm>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to top, #2980b9, #6dd5fa);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 1rem;
  padding: 3rem 4rem;
  gap: 2rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  border-radius: 2rem;
  border: none;
  background-color: rgba(41, 128, 185, 0.9);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;

  &:disabled {
    background-color: gray;
  }

  &:hover {
    background-color: rgba(41, 128, 185, 1);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const FormLabel = styled.h2`
  color: #2980b9;
  font-size: 3rem;
  text-transform: uppercase;
`;
