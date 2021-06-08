import React, {useState} from "react";
import {useForm} from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({email: "", password: ""});

  return (
    <div>
      <input 
        name="email" 
        value={values.email}
        placeholder="email"
        onChange={handleChange}
      />
      <br />
      <input 
        type="password" 
        name="password"
        placeholder="password"
        value={values.password} 
        onChange={handleChange}
      />
    </div>
  );
};

export default App;