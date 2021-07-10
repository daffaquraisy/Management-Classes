import React, {useState} from 'react';

const useForm = (initValue) => {
  const [form, setForm] = useState(initValue);

  // return value, and function for the value that change
  return [
    form,
    (formType, formValue) => {
      if (formType === 'reset') {
        // return the state to default
        return setForm(initValue);
      }

      return setForm({...form, [formType]: formValue});
    },
  ];
};

export default useForm;
