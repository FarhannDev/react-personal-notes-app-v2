/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export const useLanguage = () => {
  return useContext(LanguageContext);
};
