/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);
  const onValueChangeHandler = (event) => setValue(event.target.value);

  return [value, onValueChangeHandler];
};
