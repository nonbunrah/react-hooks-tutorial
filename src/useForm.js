import {useState} from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues); //default state
  return [values, e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }];
};