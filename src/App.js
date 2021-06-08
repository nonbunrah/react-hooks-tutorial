import React, {useEffect, useState} from "react";
import { useFetch } from "./useFetch";
import {useForm} from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({
    email: "", 
    password: "", 
    firstName: ""
  });
  const [count, setCount] = useState(0);
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)
  // http://numbersapi.com/43/trivia

  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      <br />
      <input 
        name="email" 
        value={values.email}
        placeholder="email"
        onChange={handleChange}
      />
      <br />
      <input 
        name="firstName"
        placeholder="first name"
        value={values.firstName}
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