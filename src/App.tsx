import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { Checkbox, Badge, FormControl, Button, TextField } from "./components";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submit", data);
  };

  return (
    <div className="App">
      <RegisterForm onSubmit={handleSubmit}>
        <FormControl
          type="text"
          inputType="text"
          label="Name"
          name="name"
          value={data.name}
          onChange={(e) => handleChange(e)}
        />
        <FormControl
          inputType="text"
          type="email"
          label="Email Address"
          name="email"
          value={data.email}
          onChange={(e) => handleChange(e)}
        />
        <FormControl
          inputType="text"
          type="password"
          label="Password"
          name="password"
          value={data.password}
          onChange={(e) => handleChange(e)}
        />
        <FormControl
          inputType="text"
          type="password"
          label="Confirm Password"
          name="confirmpassword"
          value={data.confirmpassword}
          onChange={(e) => handleChange(e)}
        />

        <TextField
          onChange={(e) => handleChange(e)}
          value={data.number}
          name="number"
          type="number"
        />

        <Button variant="solid" name="Submit" type="submit" />
      </RegisterForm>
    </div>
  );
}

const RegisterForm = styled.form`
  width: 400px;
  min-height: 200px;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: white;
`;

export default App;
