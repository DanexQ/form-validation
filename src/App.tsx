import styled from "styled-components";
import "./App.css";
import FormInputs from "./components/FormInputs";
import React, { useCallback, useState } from "react";

type FormDataProps = {
  username: string;
  email: string;
  firstName: string;
  fullName: string;
};

const initialState = {
  username: "",
  email: "",
  firstName: "",
  fullName: "",
};

const App = () => {
  const [formData, setFormData] = useState<FormDataProps>(initialState);

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
      <form onSubmit={handleSubmit}>
        <FormInputs
          name="username"
          placeholder="Username"
          handleChange={handleChange}
          value={formData.username}
        />
        <FormInputs
          name="email"
          placeholder="Email"
          handleChange={handleChange}
          value={formData.email}
        />
        <FormInputs
          name="firstName"
          placeholder="First Name"
          handleChange={handleChange}
          value={formData.firstName}
        />
        <FormInputs
          name="fullName"
          placeholder="Full Name"
          handleChange={handleChange}
          value={formData.fullName}
        />
        <button>Submit</button>
      </form>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
